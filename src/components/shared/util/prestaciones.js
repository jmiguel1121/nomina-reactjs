import { Prestaciones } from '../model/prestacionesModel'

export function prestaciones(totalDeveng) {
    const pres = new Prestaciones();
    const cesa = cesantias(totalDeveng);
    pres.prima = prima(totalDeveng);
    pres.vacaciones = vacaciones(totalDeveng);
    pres.cesantias = cesa;
    pres.intCesantias = intCesantias(cesa);
    pres.totalPrestaciones = totalPrestaciones(totalDeveng);
    return pres;
}


export function totalPrestaciones(totalDeveng) {
    const cesa = cesantias(totalDeveng);
    return (
        Number(prima(totalDeveng))
        + Number(vacaciones(totalDeveng))
        + Number(cesa)
        + Number(intCesantias(cesa))
    ).toFixed(0);
}

function prima(totalDeveng) {
    const res = totalDeveng * 8.33 / 100;
    return res.toFixed(2);
}

function vacaciones(totalDeveng) {
    const res = totalDeveng * 4.17 / 100;
    return res.toFixed(2);
}

function cesantias(totalDeveng) {
    const res = totalDeveng * 8.33 / 100;
    return res.toFixed(2);
}

function intCesantias(cesantias) {
    const res = 0.01 * cesantias;
    return res.toFixed(2);
}

