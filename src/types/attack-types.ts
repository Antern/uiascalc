export enum AttackTypes {
    SMITE = "SMITE",
    DRAGON_TALON = "DRAGON_TALON",
    STRAFE = "STRAFE",
    PALADIN_ZEAL = "PALADIN_ZEAL",
    SORC_ATTACK_1h_SWORD_AXE = "SORC_ATTACK_1h_SWORD_AXE",
    SORC_ATTACK_2h_SWORD = "SORC_ATTACK_2h_SWORD",
    SORC_ATTACK_2h_AXE = "SORC_ATTACK_2h_AXE",
    SORC_ATTACK_XBOW = "SORC_ATTACK_XBOW",
    ROGUE_ATTACK = "ROGUE_ATTACK",
    TOWN_GUARD_ATTACK_JAB = "TOWN_GUARD_ATTACK_JAB"
}

export const attackTypesDescriptionMap: {[key in AttackTypes] : string} = {
    [AttackTypes.ROGUE_ATTACK]: 'Rogue - attack',
    [AttackTypes.TOWN_GUARD_ATTACK_JAB]: 'Town Guard - attack/jab',
    [AttackTypes.SORC_ATTACK_1h_SWORD_AXE]: 'Sorc - 1h Sword/Axe swing',
    [AttackTypes.SORC_ATTACK_2h_SWORD]: 'Sorc - 2h Sword swing',
    [AttackTypes.SORC_ATTACK_2h_AXE]: 'Sorc - 2h Axe swing',
    [AttackTypes.SORC_ATTACK_XBOW]: 'Sorc - Crossbow',
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
