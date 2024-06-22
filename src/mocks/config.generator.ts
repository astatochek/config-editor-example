import { ParameterDto } from '~/model/parameter.model'
import { ConfigDto } from '~/model/config.model'
import { faker } from '@faker-js/faker'

function generateStubParameter(): ParameterDto {
    return {
        value: faker.word.noun(),
        metaType: [faker.word.noun(), faker.number.int(), faker.datatype.boolean()][faker.number.int({
            min: 0,
            max: 2,
        })],
    }
}

export function generateStubConfig(depth: number = 0, maxDepth: number = 2): ConfigDto {
    const parameters: ParameterDto[] = Array.from({
        length: faker.number.int({
            min: 1,
            max: 5,
        }),
    }, generateStubParameter)

    let children: ConfigDto[] = []
    if (depth < maxDepth) {
        children = Array.from({
            length: faker.number.int({
                min: 0,
                max: 3,
            }),
        }, () => generateStubConfig(depth + 1))
    }

    return {
        parameters,
        children,
    }
}
