import { Parafiscales } from '../model/parafiscalesModel';


export function parafiscales(totalDeveng, auxTransp) {
    const para = new Parafiscales()
    para.saludPatron = saludPatron(totalDeveng, auxTransp);
    para.pensionPatron = pensionPatron(totalDeveng, auxTransp);
    para.ARP = ARP(totalDeveng);
    para.sena = sena(totalDeveng, auxTransp);
    para.icbf = icbf(totalDeveng, auxTransp);
    para.cajas = cajas(totalDeveng, auxTransp);
    para.totalParafiscales = calTotalParafiscales(totalDeveng, auxTransp);
    return para;
}


export function calTotalParafiscales(totalDeveng, auxTransp) {
    return (
        Number(saludPatron(totalDeveng, auxTransp))
        + Number(pensionPatron(totalDeveng, auxTransp))
        + Number(ARP(totalDeveng))
        + Number(sena(totalDeveng, auxTransp))
        + Number(icbf(totalDeveng, auxTransp))
        + Number(cajas(totalDeveng, auxTransp))
    ).toFixed(2);
}

function saludPatron(totalDeveng, auxTransp) {
    const res = (totalDeveng - auxTransp) * 8.5 / 100;
    return res.toFixed(0);
}

function pensionPatron(totalDeveng, auxTransp) {
    const res = (totalDeveng - auxTransp) * 12 / 100;
    return res.toFixed(0);
}

function ARP(totalDeveng) {
    const res = 0.0522 * (totalDeveng);
    return res.toFixed(0);
}

function sena(totalDeveng, auxTransp) {
    const res = (totalDeveng - auxTransp) * 0.02;
    return res.toFixed(0);
}

function icbf(totalDeveng, auxTransp) {
    const res = (totalDeveng - auxTransp) * 0.03;
    return res.toFixed(0);
}

function cajas(totalDeveng, auxTransp) {
    const res = (totalDeveng - auxTransp) * 0.04;
    return res.toFixed(0);

}