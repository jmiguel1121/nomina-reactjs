import React, { Component } from 'react';
import Title from '../../../components/shared/components/title/title';

class ResulDevengado extends Component {

    render() {
        return (
            <div>
                <Title title="Devengado" />
                <div className="row">
                    <div className="col-lg-3 col-md-3">
                        <div className="form-group">
                            <label htmlFor="horasExtDiurnas">valor Extras Diur</label>
                            <label className="form-control" id="horasExtDiurnas">
                                {this.props.empleado.devengado.horasExtDiurnas}
                            </label>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-3">
                        <div className="form-group">
                            <label htmlFor="horasExtNocturnas">valor Extras Noc.</label>
                            <label className="form-control" id="horasExtNocturnas">
                                {this.props.empleado.devengado.horasExtNocturnas}
                            </label>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-3">
                        <div className="form-group">
                            <label htmlFor="horasExtDiurnasDom">Valor Ext. Dom. Diu.</label>
                            <label className="form-control" id="horasExtDiurnasDom">
                                {this.props.empleado.devengado.horasExtDiurnasDom}
                            </label>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-3">
                        <div className="form-group">
                            <label htmlFor="horasExtNocturnasDom">Valor Ext. Noc. Dom.</label>
                            <label className="form-control" id="horasExtNocturnasDom">
                                {this.props.empleado.devengado.horasExtNocturnasDom}
                            </label>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-3">
                        <div className="form-group">
                            <label htmlFor="recargoNocturno">Valor Recargo Noc.</label>
                            <label className="form-control" id="recargoNocturno">
                                {this.props.empleado.devengado.recargoNocturno}
                            </label>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3">
                        <div className="form-group">
                            <label htmlFor="auxilioTransp">Auxilio Transp.</label>
                            <label className="form-control" id="auxilioTransp">
                                {this.props.empleado.auxilioTransp}
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ResulDevengado;
