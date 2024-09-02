import React from 'react'

const Header = () => {
  return (
    <div><header>
    <nav>
      <div className="logo">
        <h1>SocialConnect</h1>
      </div>
      <ul className="nav-links">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Profile</a>
        </li>
        <li>
          <a href="#">Messages</a>
        </li>
        <li>
          <a href="#">Notifications</a>
        </li>
        <li>
          <a href="#">Settings</a>
        </li>
      </ul>
      <div className="login-signup">
        <a href="#" className="btn login">
          Login
        </a>
        <a href="#" className="btn signup">
          Sign Up
        </a>
      </div>
    </nav>
  </header></div>
  )
}

export default Header