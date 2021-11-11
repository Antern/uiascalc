import {AttackTypes, attackTypesDescriptionMap} from "../types/attack-types";
import {baseAF} from "./base-attacks";
import {dragonTalon} from "./skills/dragon-talon";
import {strafe} from "./skills/strafe";
import {zeal} from "./skills/zeal";

function calc(
    attackType: AttackTypes,
    gias: number,
    sias: number,
    wsm: number,
) {
    switch(attackType) {
        case AttackTypes.SMITE:
            return [baseAF(12, gias, sias, wsm)];

        case AttackTypes.PALADIN_ZEAL:
            return zeal(gias, sias, wsm);

        case AttackTypes.DRAGON_TALON:
            return dragonTalon(gias, sias, wsm);

        case AttackTypes.STRAFE:
            return strafe(gias, sias, wsm);
    }
}

export function calcAndFormat(
    attackType: AttackTypes,
    srcGias: string,
    srcSias: string,
    srcWsm: string,
): {label: string; value: string;} | null {
    const isOk = [srcSias, srcSias, srcWsm].every(
        arg => typeof arg !== 'undefined' && arg.length > 0 && !isNaN(parseInt(arg))
    ) && attackType !== null;

    if (!isOk) {
        return null;
    }

    const gias = parseInt(srcGias);
    const sias = parseInt(srcSias);
    const wsm = parseInt(srcWsm);

    const textValue = calc(attackType, gias, sias, wsm)?.join('/');

    return {
        label: attackTypesDescriptionMap[attackType],
        value: textValue,
    };
}
