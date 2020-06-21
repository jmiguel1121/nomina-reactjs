import React, { Component } from 'react';

class TablaEmpleados extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    /**
     * funccion que se ejecuta cuando se carga el componente
     */
    componentDidMount() {
        console.log(this.props);
    }

    render() {
        return (
            <div className="container-table">
                <table className="table">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">Cedula</th>
                            <th scope="col">Nombre Empleado</th>
                            <th scope="col">Dias Trab.</th>
                            <th scope="col">H.Extras Diurnas</th>
                            <th scope="col">H.Extras Noc.</th>
                            <th scope="col">H.Extras Dom. Diu.</th>
                            <th scope="col">H.Extras Dom. Noc.</th>
                            <th scope="col">Recargo Noc.</th>
                            <th scope="col">Basico.</th>
                            <th scope="col">Aux. Transp.</th>
                            <th scope="col">Total Extras</th>
                            <th scope="col">Total Deducido</th>
                            <th scope="col">Total Paraf.</th>
                            <th scope="col">Total Prest.</th>
                            <th scope="col">Total Deveng.</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.lstEmp.map((emp, index) => {
                            return (
                                <tr key={emp.cedula}>
                                    <td>{emp.cedula}</td>
                                    <td>{emp.nombre}</td>
                                    <td>{emp.diasTrab}</td>
                                    <td>{emp.valHED}</td>
                                    <td>{emp.valHEN}</td>
                                    <td>{emp.valHEDD}</td>
                                    <td>{emp.valHEDN}</td>
                                    <td>{emp.valRN}</td>
                                    <td>{emp.basico}</td>
                                    <td>{emp.auxilioTransp}</td>
                                    <td>{emp.devengado.totalHorasExtras}</td>
                                    <td>{emp.deducido.totalDeducido}</td>
                                    <td>{emp.parafiscales.totalParafiscales}</td>
                                    <td>{emp.prestaciones.totalPrestaciones}</td>
                                    <td>{emp.totalDevengado}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default TablaEmpleados;
