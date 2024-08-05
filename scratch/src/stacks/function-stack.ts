import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";
import * as fsUtils from "@bronifty/fs-utils";

class FunctionStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props: cdk.StackProps) {
    super(scope, id, props);

    new cdk.aws_lambda.Function(this, "HelloWorldFunction", {
      runtime: cdk.aws_lambda.Runtime.NODEJS_20_X,
      handler: "lambda.handler",
      code: cdk.aws_lambda.Code.fromAsset(
        `${fsUtils.getProjectRoot()}/src/services/hello`
      ),
    });
  }
}

export { FunctionStack };
