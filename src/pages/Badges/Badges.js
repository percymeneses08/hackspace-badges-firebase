import React from 'react'
import { Link } from 'react-router-dom'

import Loader from '../../components/Loader/Loader'
import BadgesList from '../../components/BadgesList/BadgesList'
import PageError from '../../components/pageError/pageError'
import Navbar from '../../components/Navbar/Navbar'

import db from '../../Config'

class Badges extends React.Component {
  state = {
    loading: true,
    error: null,
    data: undefined
  };

  componentDidMount() {
    this.fetchData()

    // Para que se actualice cada dterminado tiempo automáticamente
    // this.intervalId = setInterval(this.fetchData, 5000)
  }

  fetchData = async _ => {
    this.setState({ loading: true, error: null })

    try {
      let orderedData = []
      const allCollections = await db.collection("badges").get()
      
      allCollections.forEach( doc => {
          orderedData.push(doc.data())
        }
      )
      // no realizar el setState dentro del forEach, 
      // porque sino luego no cargan los badges sin previa invocación del onChange en el cuadro de búsqueda para que se actualicen los datos
      this.setState({ loading: false, data: orderedData })
      console.log(this.state.data)
    } catch(error) {
      this.setState({ loading: false,error: error })
    }
  }


  render() {
    if(this.state.loading && !this.state.data) {
      return(
        <React.Fragment>
          <Navbar />
          <Loader />
        </React.Fragment>
      )
    }
    if(this.state.error) {
      return(
        <React.Fragment>
          <Navbar />
          <PageError error={this.state.error} />
        </React.Fragment>
      ) 
    }

    return (
      <div className="badges">
        <BadgesList badges={this.state.data} />
      </div>
    )
  }
}

export default Badges