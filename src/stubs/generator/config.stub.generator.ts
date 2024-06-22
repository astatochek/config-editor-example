import { faker } from '@faker-js/faker'
import { type ParameterDto } from '~/model/parameter.model'
import { type ConfigDto } from '~/model/config.model'

function generateStubParameter(): ParameterDto {
    const stubStringLiteralElement = faker.helpers.arrayElement(['string', 'number', 'boolean'] as const)

    return {
        value: faker.word.noun(),
        metaType: stubStringLiteralElement,
    }
}

export function generateStubConfig(depth = 0, maxDepth = 2, parametersCount = 9, childrenCount = 9): ConfigDto {
    const parameters: ParameterDto[] = Array.from({
        length: parametersCount,
    }, generateStubParameter)

    let children: ConfigDto[] = []
    if (depth < maxDepth) {
        children = Array.from({
            length: childrenCount,
        }, () => generateStubConfig(depth + 1))
    }

    return {
        parameters,
        children,
    }
}
