import React from 'react'

import BadgeDetails from '../BadgeDetails/BadgeDetails'
import Loader from '../../components/Loader/Loader'
import PageError from '../../components/pageError/pageError'
// import api from '../../api'
import db from '../../Config'

class BadgeDetailsContainer extends React.Component {
  
  state = {
    loading: true,
    error: null,
    data: undefined,
    modalIsOpen: false
  }

  componentDidMount() {
    this.fetchData()
  }

  fetchData = async _ => {
    this.setState({ loading: true, error: null })

    try {
      // Mediante estos props recibo otros datos, la historia por ejemplo, a diferencia de lo que se recibe en el del render()

      const theCollection = await db.collection("badges").doc(this.props.match.params.badgeId).get()
      this.setState({ loading: false, data: theCollection.data() })
    } catch (error) {
      this.setState({ loading: false, error: error })
    }
  }

  handleOpenModal = e => {
    this.setState({ modalIsOpen: true })
  }

  handleCloseModal = e => {
    this.setState({ modalIsOpen: false })
  }

  handleDeleteBadge = async e => {
    this.setState({ loading: true, error: null })

    try {
      // Remuevo el badge según el Id
      await db.collection("badges").doc(this.props.match.params.badgeId).delete()
      this.setState({ loading: false })
      this.props.history.push('/hackspace-badges-firebase/badges')
    } catch (error) {
      this.setState({ loading: false, error: error })
    }
  }

  render() {
    if(this.state.loading) {
      return <Loader />
    }

    if(this.state.error) {
      return <PageError error={this.state.error} />
    }

    return(
      <div className="padding">
        <BadgeDetails
          badge={this.state.data}
          modalIsOpen={this.state.modalIsOpen}
          
          onOpenModal={this.handleOpenModal}
          onCloseModal={this.handleCloseModal}
          onDeleteBadge={this.handleDeleteBadge}
        />
      </div>
    )
  }
}

export default BadgeDetailsContainer