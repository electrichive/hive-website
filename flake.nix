{
  description = "schraderz mattermost deployment";
  inputs = {
    devshell.url = "github:numtide/devshell";
    flake-utils.url = "github:numtide/flake-utils";
    nixpkgs.url = "github:nixos/nixpkgs";
    terranix.url = "github:terranix/terranix";
    terranix.inputs.nixpkgs.follows = "nixpkgs";
  };
  outputs =
    inputs@{ self
    , devshell
    , flake-utils
    , nixpkgs
    , terranix
    }: flake-utils.lib.eachDefaultSystem (system:
    let
      project = "hive";
      pkgs = import nixpkgs {
        inherit system;
        overlays = [ devshell.overlay ];
      };
      tf = rec {
        config = terranix.lib.terranixConfiguration {
          inherit system;
          modules = [ ./infra/config.nix ];
        };
        commandToApp = command: {
          type = "app";
          program = toString (pkgs.writers.writeBash "${command}" ''
            result="config.tf.json"
            terraform="${pkgs.terraform}/bin/terraform"
            [[ -e $result ]] && rm -f $result
            cp ${config} $result
            $terraform init
            $terraform ${command}
          '');
        };
      };
    in
    rec {
      packages.tf = tf.config;
      packages.default = packages.tf;

      apps = pkgs.lib.genAttrs [ "apply" "plan" "destroy" ] tf.commandToApp;

      devShell = pkgs.devshell.mkShell {
        name = "${project}-shell";
        commands = [{ package = "devshell.cli"; }];
        packages = with pkgs; [
          awscli2
          gitleaks
          go
          kubectl
          kubernetes-helm
          nixpkgs-fmt
          nodejs
          pre-commit
          terraform
          tfsec
        ];
      };
    }
    );
}
