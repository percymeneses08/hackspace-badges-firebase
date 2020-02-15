import React from 'react'
import { Link } from 'react-router-dom'

import HackspaceMini from '../../images/hackspace-mini.png'
import '../../styles/css/styles.css'

class Navbar extends React.Component {
  render () {
    return (
      <div className="navbar">
        <Link className="navbar-link" to="/">
          <img src={HackspaceMini} alt="Hackspace-mini.png"/>
        </Link>
      </div>
    )
  }
}

export default Navbar