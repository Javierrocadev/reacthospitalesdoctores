import React, { Component } from 'react'
import axios from 'axios';
import Global from '../Global';
import DetallesDoctor from './DetallesDoctor';
import { NavLink } from 'react-router-dom';
export default class Doctores extends Component {
    state = {
        doctores: [],
        status: false,
        idDoctor: -1
    }
    loadDoctores = () => {
        var request = "api/Doctores/DoctoresHospital/" +
            this.props.idhospital;
        var url = Global.apiDoctores + request;
        axios.get(url).then(response => {
            this.setState({
                doctores: response.data,
                status: true
            })
        })
    }
    componentDidMount = () => {
        this.loadDoctores();
    }
    componentDidUpdate = (oldProps) => {
        //NUNCA LLAMAREMOS A DIDUPDATE SIN UN CONTROL DE PROPS
        console.log("Update");
        if (oldProps.idhospital != this.props.idhospital) {
            this.loadDoctores();
        }
    }
    mostrarDetalleDoctor = (iddoctor) => {
        this.setState({
            idDoctor: iddoctor
        })
    }
    render() {
        return (
            <div>
                <h1 style={{ color: "red" }}>
                    Doctores {this.props.idhospital}
                </h1>
                {
                    this.state.idDoctor != -1 &&
                    (<DetallesDoctor iddoctor={this.state.idDoctor} />)
                }
                <table className='table table-bordered'>
                    <thead>
                        <tr>
                            <th>Apellido</th>
                            <th>Especialidad</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.status == true &&
                            (
                                this.state.doctores.map((doctor, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{doctor.apellido}</td>
                                            <td>{doctor.especialidad}</td>
                                            <td>
                                                <button onClick={() => this.mostrarDetalleDoctor(doctor.idDoctor)}
                                                    className='btn btn-info'>
                                                    Detalles
                                                </button>
                                            </td>
                                            <td>

                                                <NavLink to={"/detallesdoctor/" + doctor.idDoctor} >Detalles</NavLink>
                                            </td>
                                        </tr>
                                    )
                                })
                            )
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}