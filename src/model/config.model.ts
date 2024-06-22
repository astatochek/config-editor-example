import { z } from "zod";
import { Parameter, parameterBackendSchema } from "./parameter.model";

const baseConfigBackendSchema = z.object({
  parameters: parameterBackendSchema.array(),
});

type ConfigDto = z.infer<typeof baseConfigBackendSchema> & {
  children: ConfigDto[];
};

export const configBackendShema: z.ZodType<ConfigDto> =
  baseConfigBackendSchema.extend({
    children: z.lazy(() => configBackendShema.array()),
  });

export class ConfigNode {
  private opened = false;

  private constructor(
    private parameters: Parameter[],
    private children: ConfigNode[],
  ) {}

  static fromDto(dto: ConfigDto): ConfigNode {
    return new ConfigNode(
      dto.parameters.map(Parameter.fromDto),
      dto.children.map(ConfigNode.fromDto),
    );
  }
}

export class Config {
  constructor(private root: ConfigNode) {}
}
