{
  description = "Electric Hive website";
  inputs = {
    devshell.url = "github:numtide/devshell";
    flake-utils.url = "github:numtide/flake-utils";
    nixpkgs.url = "github:nixos/nixpkgs";    
  };
  outputs = inputs: inputs.flake-utils.lib.eachDefaultSystem (system:
    let
      pkgs = import inputs.nixpkgs { inherit system; overlays = [ inputs.devshell.overlay ]; };
    in {
      devShell = pkgs.devshell.mkShell {
        name = "hive-shell";
        commands = [ { package = "devshell.cli"; } ];
        packages = with pkgs; [ nixpkgs-fmt nodejs ];
      };
    }
  );
}
