import { Architecture, Code, Function, Runtime } from "aws-cdk-lib/aws-lambda";
import { Construct } from "constructs";

export interface SuperFunctionProps {
  code: Code;
  handler: string;
}

export class SuperFunction extends Construct {
  constructor(scope: Construct, id: string, props: SuperFunctionProps) {
    super(scope, id);

    new Function(this, id, {
      architecture: Architecture.X86_64,
      code: props.code,
      handler: props.handler,
      runtime: Runtime.NODEJS_18_X,
    });
  }
}
