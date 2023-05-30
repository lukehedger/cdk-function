import { App, Stack, StackProps } from "aws-cdk-lib";
import { SuperFunction } from "@lukehedger/superfunction";

class ExampleStack extends Stack {
  constructor(scope: App, id: string, props?: StackProps) {
    super(scope, id, props);

    new SuperFunction(this, "SuperFunction", {
      code: {},
      handler: "index.ts",
    });
  }
}

new ExampleStack(new App(), "example-stack", {
  env: {
    account: process.env.AWS_ACCOUNT_ID || process.env.CDK_DEFAULT_ACCOUNT,
    region: process.env.AWS_REGION || process.env.CDK_DEFAULT_REGION,
  },
});
