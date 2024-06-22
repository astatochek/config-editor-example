import { type Plan } from '~/model/plan.model'
import { generateStubConfig } from '~/stubs/generator/config.stub.generator'

export function generateStubPlan(plantCount: number): Plan {
    const generatedPlan: Plan = {}
    const cashedConfig = generateStubConfig(0, 999) // provide depth & maxDepth of Tree

    for (let neId = 0; neId < plantCount; neId++) {
        generatedPlan[neId] = {
            active: cashedConfig,
            planned: cashedConfig,
        }
    }

    return generatedPlan
}
