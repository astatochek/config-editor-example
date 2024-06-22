import { z } from "zod";
import { Parameter, parameterBackendSchema } from "./parameter.model";

const baseConfigBackendSchema = z.object({
  parameters: parameterBackendSchema.array(),
});

export type ConfigDto = z.infer<typeof baseConfigBackendSchema> & {
  children: ConfigDto[];
};

export const configBackendSchema: z.ZodType<ConfigDto> =
  baseConfigBackendSchema.extend({
    children: z.lazy(() => configBackendSchema.array()),
  });

export class ConfigNode {
  private opened = false;

  private constructor(
    private parameters: Parameter[],
    private children: ConfigNode[],
  ) {}

  static fromDto(dto: ConfigDto): ConfigNode {
    return new ConfigNode(
        //eslint-disable-next-line @typescript-eslint/unbound-method
      dto.parameters.map(Parameter.fromDto),
      dto.children.map(ConfigNode.fromDto),
    );
  }
}

export class Config {
  constructor(private root: ConfigNode) {}
}
