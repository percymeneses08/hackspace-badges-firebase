// Para usar gravatar con el md5 primero tuvimos que instalar el paquete con 'npm install md5'
// Este componente va a ser funcional porque no tiene ningún tipo de estado

import React from 'react'
import md5 from 'md5'

function Gravatar(props) {
  const email = props.emailGravatar
  const hash = md5(email)

  return(
    <img src={`https://www.gravatar.com/avatar/${hash}?d=identicon`} alt="Avatar según el hask que nos da el email"/>
  )
}

export default Gravatar