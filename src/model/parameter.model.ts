import { z } from "zod";

export const parameterBackendScema = z.object({
  value: z.string(),
  metaType: z.union([z.string(), z.number(), z.boolean()]),
});

export type ParameterDto = z.infer<typeof parameterBackendScema>;
