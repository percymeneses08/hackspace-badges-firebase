import React from 'react'

import Gravatar from '../Gravatar/Gravatar'
import HackspaceMini from '../../images/logo.png'

class Badge extends React.Component {
  render() {
    return (
      <div className="badge" style={{position: this.props.BadgePosition, left: this.props.BadgeLeft, width: this.props.width, fontSize: this.props.fontSize}}>
        <div className="badge-header">
          <img className="logo" src={HackspaceMini} alt="hackspace-mini.png"/>
        </div>
        <div className="badge-name">
          <figure className="userAvatar">
            <Gravatar emailGravatar={this.props.emailValue} />
          </figure>
          <h2>{this.props.firstNameValue} <br/> {this.props.lastNameValue}</h2>
        </div>
        <div className="badge-info">
          <h3>{this.props.experienceValue} {this.props.areaValue}</h3>
          <h4>{this.props.portfolioValue}</h4>
          <h5>{this.props.emailValue}</h5>
        </div>
        <div className="badge-footer">
          <h4>#Hackspace</h4>
        </div>
      </div>
    )
  }
}

export default Badge