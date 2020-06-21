import { Devengado } from './devendadoModel';
import { Parafiscales } from './parafiscalesModel';
import { Prestaciones } from './prestacionesModel';
import { Deducido } from './deducidoModel';

export function empleado() {
    return {
        nombre: '',
        cedula: '',
        sueldo: 0,
        basico: undefined,
        diasTrab: undefined,
        totalDevengado: undefined,
        auxilioTransp: undefined,
        valHED: 0,
        valHEN: 0,
        valHEDD: 0,
        valHEDN: 0,
        valRN: 0,
        deducido: new Deducido(),
        devengado: new Devengado(),
        parafiscales: new Parafiscales(),
        prestaciones: new Prestaciones(),
    }
}

