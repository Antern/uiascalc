import {baseAF, rollbackAF} from "../base-attacks";

export function strafe(
    gias: number,
    sias: number,
    wsm: number,
) {
    return [
        baseAF(7, gias, sias, wsm),
        rollbackAF(3, gias, sias, wsm),
        baseAF(11, gias, sias, wsm),
    ]
}
