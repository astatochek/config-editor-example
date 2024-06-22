import { z } from 'zod'

export const parameterBackendSchema = z.object({
  value: z.string(),
  metaType: z.union([z.string(), z.number(), z.boolean()]),
});

export type ParameterDto = z.infer<typeof parameterBackendSchema>;

export class Parameter {
  private constructor(
    private value: ParameterDto["value"],
    private metaType: ParameterDto["metaType"],
  ) {}

  static fromDto(dto: ParameterDto): Parameter {
    return new Parameter(dto.value, dto.metaType);
  }
}
