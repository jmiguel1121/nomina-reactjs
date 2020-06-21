import React, { Component } from 'react';
import Title from '../../components/shared/components/title/title';
import { basico } from '../../components/shared/util/devengado';
import { empleado } from '../../components/shared/model/empleadoModel';
import { horasExtras, auxilioTransp, totalDevengado } from './../../components/shared/util/devengado';
import { calFondoSol, calReteFuente, calSaludCola, calUVT, calTotalDeducido } from './../../components/shared/util/deducido';
import { parafiscales } from './../../components/shared/util/parafiscales';
import { prestaciones } from './../../components/shared/util/prestaciones';
import { numVacio } from './../../components/shared/util/utilFuc';
import ResulDevengado from './resutNomina/result-devengado';
import ResultDeducido from './resutNomina/result-deducido';
import ResultParafiscales from './resutNomina/result-parafis';
import ResultPrestaciones from './resutNomina/result-prestaciones';
import TablaEmpleados from './table/tablaEmpleados';


class Generate extends Component {
    constructor() {
        super();
        this.state = {
            empleado: empleado(),
            listaEmpleados: []
        };
        this.reset = this.reset.bind(this);
        this.submitForm = this.submitForm.bind(this);
        this.changeValue = this.changeValue.bind(this);
        this.addEmpleado = this.addEmpleado.bind(this);
        this.cancelarAddEmpleado = this.cancelarAddEmpleado.bind(this);
    }

    /**
     * funccion que se ejecuta cuando se carga el componente
     */
    componentDidMount() {
        this.setState({ showResult: false });
    }

    reset(e) {
        this.setState({ empleado: empleado() });
        document.getElementById("formNomina").reset();
        this.setState({ showResult: false });
    }

    submitForm = (e) => {
        e.preventDefault();
        const emp = this.state.empleado;
        const sueldo = numVacio(this.state.empleado.sueldo);
        const diasTrab = numVacio(this.state.empleado.diasTrab);
        // basico
        emp.basico = basico(sueldo, emp.diasTrab);
        // devengado
        emp.devengado = horasExtras(sueldo,
            numVacio(emp.valHED),
            numVacio(emp.valHEN),
            numVacio(emp.valHEDD),
            numVacio(emp.valHEDN),
            numVacio(emp.valRN)
        );
        // auxilio de tranposte
        emp.auxilioTransp = auxilioTransp(sueldo, diasTrab);
        // total devengado
        emp.totalDevengado = totalDevengado(emp.auxilioTransp, emp.devengado.totalHorasExtras, emp.basico);
        // Deducido
        emp.deducido.saludCola = calSaludCola(emp.totalDevengado, emp.auxilioTransp);
        emp.deducido.pensionCola = emp.deducido.saludCola;
        emp.deducido.fondoSolid = calFondoSol(emp.totalDevengado);
        emp.deducido.uvt = calUVT(emp.totalDevengado, emp.deducido.saludCola, emp.deducido.pensionCola, emp.deducido.fondoSolid);
        emp.deducido.reteFuente = calReteFuente(emp.deducido.uvt);
        emp.deducido.totalDeducido = calTotalDeducido(
            emp.deducido.saludCola,
            emp.deducido.pensionCola,
            emp.deducido.fondoSolid,
            emp.deducido.reteFuente
        )
        //apropiaciones parafiscales
        emp.parafiscales = parafiscales(emp.totalDevengado, emp.auxilioTransp);
        emp.prestaciones = prestaciones(emp.totalDevengado);
        setTimeout(() => {
            this.setState({ empleado: emp });
            this.setState({ showResult: true });
        }, 500);
    }

    changeValue = (e) => {
        const val = e.target.value;
        const propetie = e.target.name
        this.setState(preState => {
            let empleado = Object.assign({}, preState.empleado);
            empleado[propetie] = val;
            return { empleado };
        });
    }

    addEmpleado = () => {
        const lstEmp = this.state.listaEmpleados;
        lstEmp.push(this.state.empleado);
        this.setState({ listaEmpleados: lstEmp });
        this.setState({ showResult: false });
    }

    cancelarAddEmpleado = () => {
        this.setState({ showResult: false });
    }

    render() {
        return (
            <div>
                <Title title="Empleado" />
                <div className="col-lg-12">
                    <form id="formNomina" onSubmit={this.submitForm}>
                        <div className="row">
                            <div className="col-lg-3 col-md-3">
                                <div className="form-group">
                                    <label htmlFor="exampleFormControlInput1">Cedula</label>
                                    <input type="text" className="form-control" name="cedula" id="cedula"
                                        placeholder="Cedula" onChange={this.changeValue}
                                        value={this.state.empleado.cedula} />
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-6">
                                <div className="form-group">
                                    <label htmlFor="exampleFormControlInput1">Nombre Empleado</label>
                                    <input type="text" className="form-control" name="nombre" id="nombre" placeholder="Nombre empleado"
                                        onChange={this.changeValue}
                                        value={this.state.empleado.nombre} />
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-3">
                                <div className="form-group">
                                    <label htmlFor="exampleFormControlInput1">Sueldo</label>
                                    <input type="number" className="form-control" name="sueldo" id="basico" placeholder="Basico"
                                        onChange={this.changeValue}
                                        value={this.state.empleado.sueldo} />
                                </div>
                            </div>

                            <hr />

                            <div className="col-lg-2 col-md-2">
                                <div className="form-group">
                                    <label htmlFor="exampleFormControlInput1">Dias Trabajados</label>
                                    <input type="number" className="form-control" name="diasTrab" id="dTrabajados"
                                        placeholder="Dias Trabajados" onChange={this.changeValue}
                                        value={this.state.empleado.diasTrab} />
                                </div>
                            </div>

                            <div className="col-lg-2 col-md-2">
                                <div className="form-group">
                                    <label htmlFor="exampleFormControlInput1">H. Extras Diurnas</label>
                                    <input type="number" className="form-control" name="valHED" id="valHED"
                                        placeholder="H. Extras Diurnas" onChange={this.changeValue}
                                        value={this.state.empleado.valHED} />
                                </div>
                            </div>

                            <div className="col-lg-2 col-md-2">
                                <div className="form-group">
                                    <label htmlFor="exampleFormControlInput1">H. Extras Noc.</label>
                                    <input type="number" className="form-control" name="valHEN" id="valHEN"
                                        placeholder="H. Extras Diurnas Noc" onChange={this.changeValue}
                                        value={this.state.empleado.valHEN} />
                                </div>
                            </div>

                            <div className="col-lg-2 col-md-2">
                                <div className="form-group">
                                    <label htmlFor="exampleFormControlInput1">H. Extras Dom. Diu.</label>
                                    <input type="number" className="form-control" name="valHEDD" id="valHEDD"
                                        placeholder="H. Extras Diurnas Dom" onChange={this.changeValue}
                                        value={this.state.empleado.valHEDD} />
                                </div>
                            </div>

                            <div className="col-lg-2 col-md-2">
                                <div className="form-group">
                                    <label htmlFor="exampleFormControlInput1">H. Extras Dom. Noc.</label>
                                    <input type="number" className="form-control" name="valHEDN" id="valHEDN"
                                        placeholder="H. Extras Nocturnas Dom" onChange={this.changeValue}
                                        value={this.state.empleado.valHEDN} />
                                </div>
                            </div>

                            <div className="col-lg-2 col-md-2">
                                <div className="form-group">
                                    <label htmlFor="exampleFormControlInput1">Recargo Noc.</label>
                                    <input type="number" className="form-control" name="valRN" id="valRN"
                                        placeholder="Recargo Noc" onChange={this.changeValue}
                                        value={this.state.empleado.valRN} />
                                </div>
                            </div>
                            {!this.state.showResult ?
                                <div className="col-lg-6 col-md-6">
                                    <button type="submit" className="btn btn-success btn-block">Generara Nomina</button>
                                </div>
                                : null
                            }
                            {!this.state.showResult ?
                                <div className="col-lg-6 col-md-6">
                                    <button type="button" className="btn btn-warning btn-block"
                                        onClick={this.reset}>Reiniciar valores</button>
                                </div>
                                : null
                            }
                        </div>
                        <hr />
                        {this.state.showResult ? <ResulDevengado empleado={this.state.empleado} /> : null}
                        <hr />
                        {this.state.showResult ? <ResultDeducido empleado={this.state.empleado} /> : null}
                        <hr />
                        {this.state.showResult ? <ResultParafiscales empleado={this.state.empleado} /> : null}
                        <hr />
                        {this.state.showResult ? <ResultPrestaciones empleado={this.state.empleado} /> : null}
                        <hr />
                        {this.state.showResult ?
                            <div className="row">
                                <div className="col-lg-6 col-md-6">
                                    <button type="button" className="btn btn-primary btn-block"
                                        onClick={this.addEmpleado}>Aceptar y añadir empleado</button>
                                </div>
                                <div className="col-lg-6 col-md-6">
                                    <button type="button" className="btn btn-danger btn-block"
                                        onClick={this.cancelarAddEmpleado}>cancelar</button>
                                </div>
                            </div> : null
                        }
                        <br />
                        <hr />
                    </form>
                </div>
                <hr />
                <div className="row">
                    {!this.state.showResult ? <TablaEmpleados lstEmp={this.state.listaEmpleados} /> : null}
                </div>
            </div >
        );
    }

}

export default Generate;

