import React, { Component } from 'react'
import { Route, BrowserRouter, Routes, useParams } from 'react-router-dom';
import MenuHospitales from './MenuHospitales';
import Home from './Home';
import Doctores from './Doctores';
import DetallesDoctor from './DetallesDoctor';
import CreateHospital from './CreateHospital';
import ListaHospitales from './ListaHospitales';
export default class Router extends Component {
  render() {
    function DoctoresElement() {
      var { idhospital } = useParams();
      return <Doctores idhospital={idhospital} />
    }
    function DetallesDoctorElement() {
      var { iddoctor } = useParams();
      return <DetallesDoctor iddoctor={iddoctor} />
    }
    return (
      <BrowserRouter>
        <MenuHospitales />
        <hr />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/doctores/:idhospital" element={<DoctoresElement />} />
          <Route path="/detallesdoctor/:iddoctor" element={<DetallesDoctorElement />} />
          <Route path='/createhospital' element={<CreateHospital />} />
          <Route path='/listahospitales' element={<ListaHospitales />} />
        </Routes>
      </BrowserRouter>
    )
  }
}
