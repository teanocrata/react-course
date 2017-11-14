import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => (
  <nav>
    <ul>
      <li>
        <Link to='/'>Users</Link>
      </li>
      <li>
        <Link to='/contacts'>Contacts</Link>
      </li>
    </ul>
  </nav>
)

export default Navigation;
