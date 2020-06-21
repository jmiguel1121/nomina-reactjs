import React, { Component } from 'react';
import Title from '../../../components/shared/components/title/title';

class ResultDeducido extends Component {
    render() {
        return (
            <div>
                <Title title="Deducido" />
                <div className="row">
                    <div className="col-lg-4 col-md-4">
                        <div className="form-group">
                            <label htmlFor="saludCola">Salud Colab.</label>
                            <label className="form-control" id="saludCola">
                                {this.props.empleado.deducido.saludCola}
                            </label>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-4">
                        <div className="form-group">
                            <label htmlFor="pensionCola">Pension Colab.</label>
                            <label className="form-control" id="pensionCola">
                                {this.props.empleado.deducido.pensionCola}
                            </label>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-4">
                        <div className="form-group">
                            <label htmlFor="fondoSolid">Fondo Solid.</label>
                            <label className="form-control" id="fondoSolid">
                                {this.props.empleado.deducido.fondoSolid}
                            </label>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-4">
                        <div className="form-group">
                            <label htmlFor="uvt">uvt.</label>
                            <label className="form-control" id="uvt">
                                {this.props.empleado.deducido.uvt}
                            </label>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-4">
                        <div className="form-group">
                            <label htmlFor="reteFuente">ReteFuente.</label>
                            <label className="form-control" id="reteFuente">
                                {this.props.empleado.deducido.reteFuente}
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ResultDeducido;
