import { Cons } from './constantes';
import { Devengado } from '../model/devendadoModel';

export function basico(sueldo, dTrabjados) {
    let res = (sueldo / Cons.dias) * dTrabjados;
    res = res.toFixed(2);
    return res;

}

export function horasExtras(sueldo, HED, HEN, HEDD, HEDN, RN) {
    const extra = new Devengado();
    extra.recargoNocturno = recargoNocturno(sueldo, RN);
    extra.horasExtNocturnasDom = horasExtNocturnasDom(sueldo, HEDN);
    extra.horasExtDiurnasDom = horasExtDiurnasDom(sueldo, HEDD);
    extra.horasExtNocturnas = horasExtNocturnas(sueldo, HEN);
    extra.horasExtDiurnas = horasExtDiurnas(sueldo, HED);
    extra.totalHorasExtras = totalHorasExtras(sueldo, HED, HEN, HEDD, HEDN, RN);
    return extra;
}

export function totalDevengado(auxTransp, totalExtras, basico) {
    return (Number(auxTransp) + Number(totalExtras) + Number(basico)).toFixed(0);
}

export function totalHorasExtras(sueldo, HED, HEN, HEDD, HEDN, RN) {
    const rn = Number(recargoNocturno(sueldo, RN));
    const hedn = Number(horasExtNocturnasDom(sueldo, HEDN));
    const hedd = Number(horasExtDiurnasDom(sueldo, HEDD));
    const hen = Number(horasExtNocturnas(sueldo, HEN));
    const hed = Number(horasExtDiurnas(sueldo, HED));
    const res = rn + hedn + hedd + hen + hed;
    return res.toFixed(2);
}

export function auxilioTransp(sueldo, dTrabjados) {
    let res = 0;
    if (sueldo < (Cons.salarioBasic * 2)) {
        res = Cons.auxTransp / Cons.dias * dTrabjados;
        res = res.toFixed(2);
    }
    return res;
}

function horasExtDiurnas(sueldo, HED) {
    let res = (sueldo / Cons.extras) * HED * Cons.v_HED;
    return res.toFixed(2);
}

function horasExtNocturnas(sueldo, HEN) {
    let res = (sueldo / Cons.extras) * HEN * Cons.v_HEN;
    return res.toFixed(2);
}

function horasExtDiurnasDom(sueldo, HEDD) {
    let res = (sueldo / Cons.extras) * HEDD * Cons.v_HEDD;
    return res.toFixed(2);
}

function horasExtNocturnasDom(sueldo, HEDN) {
    let res = (sueldo / Cons.extras) * HEDN * Cons.v_HEDN;
    return res.toFixed(2);
}

function recargoNocturno(sueldo, RN) {
    let res = (sueldo / Cons.extras) * RN * Cons.v_RN;
    return res.toFixed(2);
}