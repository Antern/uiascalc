import {baseAF, rollbackAF} from "../base-attacks";

export function dragonTalon(
    gias: number,
    sias: number,
    wsm: number,
) {
    return [
        rollbackAF( 4, gias, sias, wsm ),
        baseAF( 13, gias, sias, wsm ),
    ]
}
