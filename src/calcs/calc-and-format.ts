import {AttackTypes} from "./attack-types";
import {baseAF} from "./base-attacks";
import {dragonTalon} from "./skills/dragon-talon";
import {strafe} from "./skills/strafe";

export function calcAndFormat(
    attackType: AttackTypes,
    srcGias: string,
    srcSias: string,
    srcWsm: string,
) {
    const isOk = [srcSias, srcSias, srcWsm].every(
        arg => typeof arg !== 'undefined' && arg.length > 0 && !isNaN(parseInt(arg))
    ) && attackType !== null;

    if (!isOk) {
        return null;
    }

    const gias = parseInt(srcGias);
    const sias = parseInt(srcSias);
    const wsm = parseInt(srcWsm);

    switch(attackType) {
        case AttackTypes.SMITE:
            return `Smite frames: ${baseAF(12, gias, sias, wsm)}`;

        case AttackTypes.DRAGON_TALON:
            return `Dragon talon frames: ${dragonTalon(gias, sias, wsm).join('/')}`;

        case AttackTypes.STRAFE:
            return `Amazon Strafe frames: ${strafe(gias, sias, wsm).join('/')}`;
    }
}
