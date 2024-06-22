import { generateStubConfig } from '~/mocks/config.generator'
import { Plan } from '~/model/plan.model'

export function generateStubPlan(plantCount: number): Plan {
    const generatedPlan: Plan = {}
    for (let neId = 0; neId < plantCount; neId++) {
        generatedPlan[neId] = {
            active: generateStubConfig(), // provide depth & maxDepth of Tree
            planned: generateStubConfig(), // provide depth & maxDepth of Tree
        }
    }
    return generatedPlan
}
