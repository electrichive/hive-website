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
    profile = "${org}_tristan";
  };

  data.aws_organizations_organization.electrichive_org = {};

  resource.aws_vpc_ipam.main = {
    operating_regions  = {
      region_name = config.provider.aws.region;
    };
  };
  resource.aws_vpc_ipam_pool.main = {
    address_family = "ipv4";
    ipam_scope_id  = "\${ aws_vpc_ipam.main.private_default_scope_id }";
    locale         = config.provider.aws.region;
  };
  resource.aws_vpc_ipam_pool_cidr.main = {
    ipam_pool_id = "\${ aws_vpc_ipam_pool.main.id }";
    cidr         = "172.2.0.0/16";
  };
  resource.aws_vpc.main = {
    ipv4_ipam_pool_id = "\${ aws_vpc_ipam_pool.main.id }";
    ipv4_netmask_length = 28;
  };
}

