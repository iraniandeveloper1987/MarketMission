import React from "react"

export default function Header() {
  return (
    <header className="header">
      <div className="header__logo btn--yellow">
        <i></i>
        Digital Trend
      </div>
      <div className="header__menu">
        <nav>
          <li className="btn--yellow">
            <a>Home</a>
          </li>
          <li className="btn--yellow">
            <a>Blog</a>
          </li>
          <li className="btn--yellow">
            <a>About us</a>
          </li>
          <li>
            <a className="btn__yellow">Contact</a>
          </li>
        </nav>
      </div>
    </header>
  )
}
