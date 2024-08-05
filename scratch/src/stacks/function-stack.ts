import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";
import * as fsUtils from "@bronifty/fs-utils";

class FunctionStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props: cdk.StackProps) {
    super(scope, id, props);

    const helloWorldFunction = new cdk.aws_lambda.Function(
      this,
      "HelloWorldFunction",
      {
        runtime: cdk.aws_lambda.Runtime.NODEJS_20_X,
        handler: "lambda.handler",
        code: cdk.aws_lambda.Code.fromAsset(
          `${fsUtils.getProjectRoot()}/dist/services/hello`
        ),
      }
    );

    const helloWorldFunctionUrl = new cdk.aws_lambda.FunctionUrl(
      this,
      "HelloWorldFunctionUrl",
      {
        function: helloWorldFunction,
        authType: cdk.aws_lambda.FunctionUrlAuthType.NONE,
      }
    );

    new cdk.CfnOutput(this, "FunctionUrl", {
      value: helloWorldFunctionUrl.url.toString(),
    });
  }
}

export { FunctionStack };
