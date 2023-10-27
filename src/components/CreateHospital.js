import React, { Component } from 'react'
import axios from 'axios'
import Global from '../Global'
//
import { Navigate } from 'react-router-dom'
export default class CreateHospital extends Component {
    state = {
        mensaje: "ddd",
        status: false
    }
    //creamos los objetos 
    cajaId = React.createRef()
    cajaNombre = React.createRef()
    cajaDireccion = React.createRef()
    cajaTelefono = React.createRef()
    cajaCamas = React.createRef()

    insertHospital = (e) => {
        e.preventDefault()
        var request = "webresources/hospitales/post"
        var url = Global.apiHospitales + request
        //debemos respetar los tipos de dato respecto al servicio
        var idhospital = parseInt(this.cajaId.current.value)
        var nombre = this.cajaNombre.current.value
        var direccion = this.cajaDireccion.current.value
        var telefono = this.cajaTelefono.current.value
        var camas = parseInt(this.cajaCamas.current.value)
        //debejos declara un objeto JSON dentro de react
        //con el mismo nombre de propiedades
        var hospital = {
            idhospital: idhospital,
            nombre: nombre,
            direccion: direccion,
            telefono: telefono,
            camas: camas,
        }
        //el metodo post recibe 2 parametros
        //1- url del metodo post del servicio
        //2- objeto a enviar al servicio
        axios.post(url, hospital).then((response) => {
            this.setState({
                mensaje: "hospital insertado" + nombre + "...",
                status: true
            })
        })
    }
    render() {
        return (
            <div>
                {
                    this.state.status == true && (
                        <Navigate to="/listahospitales" />
                    )
                }
                <h1>CreateHospital</h1>
                <h2>{this.state.mensaje}</h2>
                <form>
                    <legend>New Hospital</legend>
                    <label>Id Hospital</label>
                    <input type="number" className='form-control' ref={this.cajaId}></input>
                    <label>Nombre</label>
                    <input type="text" className='form-control' ref={this.cajaNombre}></input>
                    <label>Dirección</label>
                    <input type="text" className='form-control' ref={this.cajaDireccion}></input>
                    <label>Teléfono</label>
                    <input type="number" className='form-control' ref={this.cajaTelefono}></input>
                    <label>Camas</label>
                    <input type="number" className='form-control' ref={this.cajaCamas}></input>
                    <button className='btn btn-warning' onClick={this.insertHospital}>Create</button>
                </form>
            </div>
        )
    }
}
