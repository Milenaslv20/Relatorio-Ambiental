import React from 'react'
import { Link } from 'react-router-dom'

function Sobre() {
  return (
    <div>
        <h1>Sobre</h1>
        <Link to="/">ir para home</Link>
        <Link to="/tree">ir para tree</Link>
    </div>
  )
}

export default Sobre