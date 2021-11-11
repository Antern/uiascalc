export enum AttackTypes {
    SMITE = "SMITE",
    DRAGON_TALON = "DRAGON_TALON",
    STRAFE = "STRAFE",
    PALADIN_ZEAL = "PALADIN_ZEAL",
}

export const attackTypesDescriptionMap: {[key in AttackTypes] : string} = {
    [AttackTypes.SMITE]: 'Paladin - Smite',
    [AttackTypes.PALADIN_ZEAL]: 'Paladin - Zeal',
    [AttackTypes.STRAFE]: 'Amazon - Strafe',
    [AttackTypes.DRAGON_TALON]: 'Assassin - DTalon',
}

export const attackTypesList: Array<{value: AttackTypes, label: string}> =
    Object.entries(attackTypesDescriptionMap)
        .map(([key, value]) => ({
            label: value,
            value: key as AttackTypes,
        }))
