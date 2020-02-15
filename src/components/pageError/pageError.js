import React from 'react'

function pageError(props) {
  return(
    <div className="pageError">
      <div className="container">
        ❌ {props.error.message} 😱
      </div>
    </div>
  )
}

export default pageError