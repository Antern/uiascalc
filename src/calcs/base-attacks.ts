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
