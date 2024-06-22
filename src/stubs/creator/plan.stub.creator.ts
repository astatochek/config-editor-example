import { generateStubPlan } from '~/stubs/generator/plan.stub.generator'
import Bun from 'bun'

async function createPlanStub(planCount = 9000) {
    const plan = generateStubPlan(planCount)

    await Bun.write('./src/stubs/json/plan_stub.json', JSON.stringify(plan))
}

await createPlanStub()