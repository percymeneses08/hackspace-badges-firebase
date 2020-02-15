import React from 'react'

class BadgeForm extends React.Component{
  
  handleClick = e => {
    console.log('button was clicked')
  }
  
  render() {
    return (
      <form className="form" onSubmit={this.props.onSubmit}>
        <div className="form-container">
          <h3>First name</h3>
          <div className="input">
            <input
              type="text"
              placeholder="example: Pepe"
              // El name es para identificarlo con el target.name
              name="firstName"

              onChange={this.props.onChange}
              value={this.props.formValues.firstName}

              required
            />
          </div>
        </div>
        <div className="form-container">
          <h3>Last name</h3>
          <div className="input">
            <input 
              type="text"
              placeholder="example: López"
              name="lastName"

              onChange={this.props.onChange}
              value={this.props.formValues.lastName}

              required
            />
          </div>
        </div>
        <div className="form-container">
          <h3>Area</h3>
          <div className="input">
            <input 
              type="text"
              placeholder="example: Front-end developer"
              name="area"
              
              onChange={this.props.onChange}
              value={this.props.formValues.area}

              autoComplete="off"
              required
            />
          </div>
        </div>
        <div className="form-container">
          <h3>Experience</h3>
          <div className="input">
            <input 
              type="text"
              placeholder="example: Semi-senior"
              name="experience"
              
              onChange={this.props.onChange}
              value={this.props.formValues.experience}

              autoComplete="off"
              required
            />
          </div>
        </div>
        <div className="form-container">
          <h3>Portfolio</h3>
          <div className="input">
            <input 
              type="text"
              placeholder="example.com"
              name="portfolio"
              
              onChange={this.props.onChange}
              value={this.props.formValues.portfolio}

              autoComplete="off"
              required
            />
          </div>
        </div>
        <div className="form-container">
          <h3>Email</h3>
          <div className="input">
            <input 
              type="email"
              placeholder="example@hotmail.com"
              name="email"

              onChange={this.props.onChange}
              value={this.props.formValues.email}

              required
            />
          </div>
        </div>
        <div className="form-container">
          <button onClick={this.handleClick} className="button">Save</button>
        </div>
      </form>
    )
  }
}

export default BadgeForm