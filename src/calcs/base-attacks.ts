export function baseAF(
    animLength: number,
    gias: number,
    sias: number,
    wsm: number,
    animSpeed = 256
) {
    const animRate = 100;
    const itemEIAS = Math.floor(120 * gias / (120 + gias));
    const EIAS = sias + itemEIAS - wsm;
    const animDiv =  Math.floor( animSpeed * (animRate + EIAS) / 100 );
    return Math.ceil(animLength * 256 / animDiv) - 1;
}

export function rollbackAF(
    animLength: number,
    gias: number,
    sias: number,
    wsm: number,
) {
    return baseAF(animLength, gias, sias, wsm) + 1;
}

// function zeal(gias, sias, wsm) {
//     return [
//         rollbackAF( 7, gias, sias, wsm ),
//         baseAF( 15, gias, sias, wsm ).result,
//     ];
// }
//
// function strafe(gias, sias, wsm) {
//     return [
//         baseAF(7, gias, sias, wsm).result,
//         rollbackAF(3, gias, sias, wsm),
//         baseAF(11, gias, sias, wsm).result,
//     ]
// }
