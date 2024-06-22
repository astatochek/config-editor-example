import { z } from "zod";
import { parameterBackendScema, ParameterDto } from "./parameter.model";

const baseConfigBackendShema = z.object({
  parameters: parameterBackendScema,
});

type ConfigDto = z.infer<typeof baseConfigBackendShema> & {
  children: ConfigDto[];
};

export const configBackendShema: z.ZodType<ConfigDto> =
  baseConfigBackendShema.extend({
    children: z.lazy(() => configBackendShema.array()),
  });
