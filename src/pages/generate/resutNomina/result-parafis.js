import React, { Component } from 'react';
import Title from '../../../components/shared/components/title/title';

class ResultParafiscales extends Component {
    render() {
        return (
            <div>
                <Title title="Parafiscales" />
                <div className="row">
                    <div className="col-lg-2 col-md-2">
                        <div className="form-group">
                            <label htmlFor="saludsaludPatronCola">Salud</label>
                            <label className="form-control" id="saludPatron">
                                {this.props.empleado.parafiscales.saludPatron}
                            </label>
                        </div>
                    </div>

                    <div className="col-lg-2 col-md-2">
                        <div className="form-group">
                            <label htmlFor="pensionPatron">Pension</label>
                            <label className="form-control" id="pensionPatron">
                                {this.props.empleado.parafiscales.pensionPatron}
                            </label>
                        </div>
                    </div>

                    <div className="col-lg-2 col-md-2">
                        <div className="form-group">
                            <label htmlFor="ARP">ARP.</label>
                            <label className="form-control" id="ARP">
                                {this.props.empleado.parafiscales.ARP}
                            </label>
                        </div>
                    </div>

                    <div className="col-lg-2 col-md-2">
                        <div className="form-group">
                            <label htmlFor="sena">Sena.</label>
                            <label className="form-control" id="sena">
                                {this.props.empleado.parafiscales.sena}
                            </label>
                        </div>
                    </div>

                    <div className="col-lg-2 col-md-2">
                        <div className="form-group">
                            <label htmlFor="icbf">ICBF.</label>
                            <label className="form-control" id="icbf">
                                {this.props.empleado.parafiscales.icbf}
                            </label>
                        </div>
                    </div>

                    <div className="col-lg-2 col-md-2">
                        <div className="form-group">
                            <label htmlFor="icbf">Cajas.</label>
                            <label className="form-control" id="icbf">
                                {this.props.empleado.parafiscales.cajas}
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ResultParafiscales;
