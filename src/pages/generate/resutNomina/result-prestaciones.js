import React, { Component } from 'react';
import Title from '../../../components/shared/components/title/title';

class ResultPrestaciones extends Component {
    render() {
        return (
            <div>
                <Title title="Prestaciones" />
                <div className="row">
                    <div className="col-lg-2 col-md-2">
                        <div className="form-group">
                            <label htmlFor="prima">Prima</label>
                            <label className="form-control" id="prima">
                                {this.props.empleado.prestaciones.prima}
                            </label>
                        </div>
                    </div>

                    <div className="col-lg-2 col-md-2">
                        <div className="form-group">
                            <label htmlFor="pensionPatron">Pension</label>
                            <label className="form-control" id="pensionPatron">
                                {this.props.empleado.prestaciones.vacaciones}
                            </label>
                        </div>
                    </div>

                    <div className="col-lg-2 col-md-2">
                        <div className="form-group">
                            <label htmlFor="ARP">ARP.</label>
                            <label className="form-control" id="ARP">
                                {this.props.empleado.prestaciones.cesantias}
                            </label>
                        </div>
                    </div>

                    <div className="col-lg-2 col-md-2">
                        <div className="form-group">
                            <label htmlFor="sena">Sena.</label>
                            <label className="form-control" id="sena">
                                {this.props.empleado.prestaciones.intCesantias}
                            </label>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default ResultPrestaciones;
