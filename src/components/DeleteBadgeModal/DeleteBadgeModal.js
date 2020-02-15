import React from 'react'

import Modal from '../Modal/Modal'

function DeleteBadgeModal(props) {
  return(
    <Modal isOpen={props.isOpen} onClose={props.onClose}>
      <div className="deleteBadgeModal">
        <h1>Are you sure?</h1>
        <p>You are about to delete this badge.</p>
        <div className="buttons">
          <button onClick={props.onClose} className="cancel">Cancel</button>
          <button onClick={props.onDeleteBadge} className="delete">Delete</button>
        </div>
      </div>
    </Modal>
  )
}

export default DeleteBadgeModal