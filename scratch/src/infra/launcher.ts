import * as cdk from "aws-cdk-lib";
import { DataStack } from "../stacks/data-stack";
import { FunctionStack } from "../stacks/function-stack";
const app = new cdk.App();
new DataStack(app, "DataStack", {});
new FunctionStack(app, "FunctionStack", {});
