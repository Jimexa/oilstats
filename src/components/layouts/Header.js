import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header style={headerStyle}>
      <h1>AllWebStats</h1>
      <Link style={linkStyle} to="/">Home</Link>  |  <Link style={linkStyle} to="/bars">2017 Bar</Link>  |  <Link style={linkStyle} to="/bars2">2018 Bar</Link>  |  <Link style={linkStyle} to="/about">About</Link>
    </header>
  )
}

const headerStyle = {
    background: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '8px'
}

export default Header

const linkStyle = {
  color: '#fff',
  textDecoration: 'none'
}