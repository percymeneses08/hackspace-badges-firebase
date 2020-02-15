import React from 'react'

import Badge from '../../components/Badge/Badge'
import BadgeForm from '../../components/BadgeForm/BadgeForm'
import Loader from '../../components/Loader/Loader'
import db from '../../Config'

class BadgeEdit extends React.Component {
  state = {
    loading: true,
    error: null,
    form: {
      firstName: '',
      lastName: '',
      area: '',
      experience: '',
      portfolio: '',
      email: ''
    }
  }

  // Pedimos los datos para editarlos
  componentDidMount() {
    this.fetchData()
  }

  fetchData = async e => {
    this.setState({ loading: true, error: null })

    try {
      // Aquí no puedo recibir los props de BadgeDetails porque no estoy en el render()
      const theCollection = await db.collection("badges").doc(this.props.match.params.badgeId).get()

      
      this.setState({ loading: false, form: theCollection.data() })
    } catch(error) {
      this.setState({ loading: false, error: error })
    }
  }

  handleChange = e => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value
      }
    })
  }

  handleSubmit = async e => {
    // Detenemos el envío del formulario
    e.preventDefault()
    // Empezamos la petición
    this.setState({ loading: true, error: null })

    try {
      await db.collection("badges").doc(this.props.match.params.badgeId).update( 
        this.state.form
      )
      this.setState({ loading: false })
      // Y nos redirigimos a la página donde están los badges
      this.props.history.push('/badges')
    } catch (error) {
      this.setState({ loading: false, error: error })
    }
  }

  render() {
    if(this.state.loading) {
      return <Loader />
    }

    return(
      <div className="padding">
        <div className="badgesEdit">
          <Badge
            BadgePosition="fixed"
            BadgeLeft="1.75em"

            firstNameValue={this.state.form.firstName}
            lastNameValue={this.state.form.lastName}
            areaValue={this.state.form.area || "Area"}
            experienceValue={this.state.form.experience || "Experience"}
            portfolioValue={this.state.form.portfolio || "Portfolio"}
            emailValue={this.state.form.email}
          />
          <BadgeForm
            onChange={this.handleChange}
            onSubmit={this.handleSubmit}
            formValues={this.state.form}
          />
        </div>
      </div>
    )
  }
}

export default BadgeEdit