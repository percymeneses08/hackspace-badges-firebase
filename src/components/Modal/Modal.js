import React from 'react'

import ReactDOM from 'react-dom'

function Modal(props) {
  if(!props.isOpen) {
    return null
  }

  return ReactDOM.createPortal(
    <div className="Modal">
      <div className="container">
        <div className="button-container">
          <button onClick={props.onClose} className="close">x</button>
        </div>
        <div className="padding-modal">
          <div className="content">
            {props.children}
          </div>
        </div>
      </div>
    </div>,
    document.getElementById('modal')
  )
}

export default Modal