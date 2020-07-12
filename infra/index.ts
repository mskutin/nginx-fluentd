import * as aws from "@pulumi/aws";

const clusterLogsBucket = new aws.s3.Bucket("nginx-fluentd-logs-asia");

export const bucketName = clusterLogsBucket.id;
