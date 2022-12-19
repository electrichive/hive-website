{ config, lib, pkgs, ... }:
let
  org = "electrichive";
  project = "website";
in
{

  # TERRAFORM CONFIG
  terraform.backend.s3 = {
    bucket = "${org}-terraform";
    key = "${project}/state";
  };
  provider.aws = {
    region = "us-west-1";
  };

  # EXISTING RESOURCES

  # NEW RESOURCES

}

