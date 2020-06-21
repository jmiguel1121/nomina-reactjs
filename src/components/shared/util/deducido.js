import { Cons } from './constantes';

export function calTotalDeducido(saludCola, pensionCola, fondoSol, reteFuente) {
    return (
        Number(saludCola)
        + Number(pensionCola)
        + Number(fondoSol)
        + Number(reteFuente)
    ).toFixed(0);
}

export function calSaludCola(totalDeveng, auxilioTransp) {
    return Number((totalDeveng - auxilioTransp) * 0.04).toFixed(0);
}

export function calNeto(totalDeveng, totalDeducido) {
    return Number(totalDeveng) - Number(totalDeducido);
}


export function calFondoSol(totalDevengado) {
    const totalDeveng = Number(totalDevengado);

    if (totalDeveng >= (4 * Cons.salarioBasic) && totalDeveng <= (16 * Cons.salarioBasic)) {
        return totalDeveng * 1 / 100;
    } else if (totalDeveng >= (16 * Cons.salarioBasic) && totalDeveng < (17 * Cons.salarioBasic)) {
        return Cons.salarioBasic * 1.2 / 100
    } else if (totalDeveng >= (17 * Cons.salarioBasic) && totalDeveng < (18 * Cons.salarioBasic)) {
        return Cons.salarioBasic * 1.4 / 100
    } else if (totalDeveng >= (18 * Cons.salarioBasic) && totalDeveng < (19 * Cons.salarioBasic)) {
        return Cons.salarioBasic * 1.6 / 100
    } else if (totalDeveng >= (19 * Cons.salarioBasic) && totalDeveng < (20 * Cons.salarioBasic)) {
        return Cons.salarioBasic * 1.8 / 100
    } else if (totalDeveng >= (19 * Cons.salarioBasic) && totalDeveng < (20 * Cons.salarioBasic)) {
        return Cons.salarioBasic * 2 / 100
    } else {
        return 0;
    }
}

export function calUVT(totalDeveng, saluCola, pensCola, fondoSol) {
    console.log(totalDeveng);
    console.log(saluCola);
    console.log(pensCola);
    console.log(fondoSol);

    return (
        ((Number(totalDeveng)
            - Number(saluCola)
            - Number(pensCola)
            - Number(fondoSol))
            * Cons.baseGrab) / Cons.valorUVT).toFixed(0);
}

export function calReteFuente(UVT) {
    let res = 0;
    const topUno = 85;
    const topDos = 140;
    const topTres = 360;
    const topCuatro = 640;
    const topCinco = 1140;
    if (UVT >= topCinco) {
        res = (UVT * 0.37 + 341) * Cons.valorUVT;
    } else {
        if (UVT >= topCuatro) {
            res = (UVT * 0.35 + 166) * Cons.valorUVT;
        } else {
            if (UVT >= topTres) {
                res = (UVT * 0.33 + 70) * Cons.valorUVT;
            } else {
                if (UVT >= topDos) {
                    res = (UVT * 0.28 + 11) * Cons.valorUVT;
                } else {
                    if (UVT >= topUno) {
                        res = (UVT * 0.19) * Cons.valorUVT;
                    }
                }
            }
        }
    }
    return res.toFixed(0);
}
