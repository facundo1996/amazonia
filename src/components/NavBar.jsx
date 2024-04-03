import React from 'react'

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">Navbar</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link b-r-2" href="/">HOME</a>
            </li>
            <li className="nav-item">
              <a className="nav-link b-r-2" href="/">SISTEMA CONSTRUCTIVO AMZ</a>
            </li>
            <li className="nav-item">
              <a className="nav-link b-r-2" href="/">COMERCIALIZACIÓN</a>
            </li>
            <li className="nav-item">
              <a className="nav-link b-r-2" href="/">EMPRESA</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">CONTACTO</a>
            </li>
          </ul>
        </div>
        <div>a</div>
      </div>
    </nav>
  )
}

export default NavBar