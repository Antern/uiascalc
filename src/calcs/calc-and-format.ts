import {AttackTypes, attackTypesDescriptionMap} from "../types/attack-types";
import {baseAF, rollbackAF} from "./base-attacks";
import {dragonTalon} from "./skills/dragon-talon";
import {strafe} from "./skills/strafe";
import {zeal} from "./skills/zeal";
import {InputData} from "../types/input-data";

function calc(
    attackType: AttackTypes,
    gias: number,
    sias: number,
    wsm: number,
) {
    switch(attackType) {
        case AttackTypes.PALADIN_ZEAL:
            return zeal(gias, sias, wsm);

        case AttackTypes.DRAGON_TALON:
            return dragonTalon(gias, sias, wsm);

        case AttackTypes.STRAFE:
            return strafe(gias, sias, wsm);

        case AttackTypes.SORC_ATTACK_1h_SWORD_AXE:
            return [baseAF(18, gias, sias, wsm)];

        case AttackTypes.SORC_ATTACK_2h_SWORD:
            return [baseAF(22, gias, sias, wsm)];

        case AttackTypes.SORC_ATTACK_2h_AXE:
            return [baseAF(16, gias, sias, wsm)];

        case AttackTypes.SORC_ATTACK_XBOW:
            return [baseAF(20, gias, sias, wsm)];

        case AttackTypes.ROGUE_ATTACK:
            return [baseAF(15, gias, sias, wsm)];

        case AttackTypes.TOWN_GUARD_ATTACK_JAB:
            return [
                baseAF(16, gias, sias, wsm),
                rollbackAF(14, gias, sias, wsm) / 2,
            ];

        default:
        case AttackTypes.SMITE:
            return [baseAF(12, gias, sias, wsm)];
    }
}

export function calcAndFormat(inputData: InputData): {label: string; value: string;} | null {
    const isOk = [
        inputData.gias,
        inputData.sias,
        inputData.wsm,
    ].every(
        arg => typeof arg !== 'undefined' && arg.length > 0 && !isNaN(parseInt(arg))
    ) && inputData.attackType !== null;

    if (!isOk) {
        return null;
    }

    const gias = parseInt(inputData.gias);
    const sias = parseInt(inputData.sias);
    const wsm = parseInt(inputData.wsm);

    const textValue = calc(inputData.attackType, gias, sias, wsm)?.join('/');

    return {
        label: attackTypesDescriptionMap[inputData.attackType],
        value: textValue,
    };
}
