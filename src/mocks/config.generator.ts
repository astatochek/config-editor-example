import { ParameterDto } from '~/model/parameter.model'
import { ConfigDto } from '~/model/config.model'
import { faker } from '@faker-js/faker'

function generateStubParameter(): ParameterDto {
    const stubStringLiteralElement = faker.helpers.arrayElement(['string', 'number', 'boolean'] as const)

    return {
        value: faker.word.noun(),
        metaType: stubStringLiteralElement,
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
