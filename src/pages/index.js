import { Link } from 'gatsby'
import React from 'react'

export default function index() {
  return (
    <div>
      <h1>HOME PAGE</h1>
      <Link to='/blog'>blog</Link>
    </div>
  )
}
