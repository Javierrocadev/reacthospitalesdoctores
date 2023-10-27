import React, { Component } from 'react'
import axios from 'axios';
import Global from '../Global';
export default class DetallesDoctor extends Component {
    state = {
        doctor: null,
        status: false
    }
    loadDoctorDetails = () => {
        var request = "api/doctores/" + this.props.iddoctor;
        var url = Global.apiDoctores + request;
        axios.get(url).then(response => {
            this.setState({
                doctor: response.data,
                status: true
            })
        })
    }
    componentDidMount = () => {
        this.loadDoctorDetails();
    }
    componentDidUpdate = (oldProps) => {
        if (oldProps.iddoctor != this.props.iddoctor) {
            this.loadDoctorDetails();
        }
    }
    render() {
        return (
            <div>
                <h1 style={{ color: "blue" }}>
                    Detalle Doctor {this.props.iddoctor}
                </h1>
                {
                    this.state.status == true &&
                    (
                        <div>
                            <h2 style={{ color: "red" }}>{this.state.doctor.apellido}</h2>
                            <h2 style={{ color: "orange" }}>{this.state.doctor.especialidad}</h2>
                            <h2 style={{ color: "green" }}>{this.state.doctor.salario}</h2>
                            <h2 style={{ color: "fuchsia" }}>{this.state.doctor.idHospital}</h2>
                        </div>
                    )
                }
            </div>
        )
    }
}