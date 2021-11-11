import {baseAF, rollbackAF} from "../base-attacks";

export function zeal(
    gias: number,
    sias: number,
    wsm: number,
) {
    return [
        rollbackAF( 7, gias, sias, wsm ),
        baseAF( 15, gias, sias, wsm ),
    ];
}
