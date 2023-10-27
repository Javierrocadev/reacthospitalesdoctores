import React, { Component } from 'react'
import imageHome from './../assets/images/home.jpg';

export default class Home extends Component {
  render() {
    return (
        <div>
            <h1>Home Hospitales</h1>
            <img src={imageHome} className="rounded"/>
        </div>
    )
  }
}
