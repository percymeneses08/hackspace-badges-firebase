import React from 'react'
import { Link } from 'react-router-dom'

class Home extends React.Component {
  render() {
    return (
      <div className="padding">
        <div className="home">
          <h1>Asociación Hack Space Perú</h1>
          <h3>Generamos Comunidad, Difundimos Tecnología.</h3>
          <Link className="button" to="/Badges">Alumnos</Link>
        </div>
      </div>
    )
  }
}

export default Home