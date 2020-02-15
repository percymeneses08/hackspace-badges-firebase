import React from 'react'

import Badge from '../../components/Badge/Badge'
import BadgeForm from '../../components/BadgeForm/BadgeForm'
import Loader from '../../components/Loader/Loader'
import db from '../../Config'

class BadgesCreate extends React.Component {
  // Declaro e incializo el estado vacío
  state = {
    loading: false,
    error: null,
    form: {
      firstName: "",
      lastName: "",
      area: "",
      experience: "",
      portfolio: "",
      email: ""
    }
  }

  // Y cada vez que se actualice
  handleChange = e => {
    this.setState({
      // Voy actualizando los datos al form con lo que se vaya escribiendo en el input
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value
      }
    })
  }

  handleSubmit = async e => {
    // Esto detiene el envio del form al realizar click en el botón
    e.preventDefault()
    // Aquí empieza la petición para guardar el nuevo badge que hemos realizado,
    // entonces el loading es true
    this.setState({ loading: true, error: null })

    try {
      // En firebase add es para agregar una colección y que automáticamente le coloque un id
      const theCollection = db.collection("badges")

      // Agrego todos los datos obtenidos en el form de state
      const save = await theCollection.add( this.state.form )
      // Y de paso guardo el id que crea automáticamente
      const id = save.id

      // para luego agregárselo a él mismo.
      // En firebase tiene que ser update para que no se reemplacen todos los items soloe por el id
      // y no esto automáticamente se crea la propiedad id en la colección indicada con el id
      await theCollection.doc(id).update({ id: id })

      this.setState({ loading: false })

      // Cuando se guarden los datos me va a dirigir más esta ruta al final
      this.props.history.push("/hackspace-badges-firebase/badges")
    } catch (error) {
      this.setState({ loading: false, error: error })
    }
  }

  render() {
    if(this.state.loading) {
      return <Loader />
    }

    return (
      <div className="padding">
        <div className="badgesCreate">
          <Badge
            BadgePosition="fixed"
            BadgeLeft="1.57em"
            
            // Le paso los valores actualizados
            firstNameValue={this.state.form.firstName || "First name"}
            lastNameValue={this.state.form.lastName || "Last name"}
            areaValue={this.state.form.area || "Area"}
            experienceValue={this.state.form.experience || "Experience"}
            portfolioValue={this.state.form.portfolio || "Portfolio"}
            emailValue={this.state.form.email || "Email"}
          />
          <BadgeForm 
            // Le paso la función handleChange declarada arriba a BadgeForm con otro nombre, onChange en este caso
            onChange={this.handleChange}
            onSubmit={this.handleSubmit}
            formValues={this.state.form}
          />
        </div>
      </div>
    )
  }
}

export default BadgesCreate