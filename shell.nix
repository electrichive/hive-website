{ pkgs ? import <nixpkgs> { } }:

with pkgs; mkShell {
    nativeBuildInputs = [ nixpkgs-fmt nodejs ];
}
