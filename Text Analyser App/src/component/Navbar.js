import React from 'react'
import PropTypes from 'prop-types';

export default function NavBar() {
  return (
    <nav classname={'navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}'}>
    <div classname="container-fluid">
      <a classname="navbar-brand" href="/">Tanmay</a>
      <button classname="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span classname="navbar-toggler-icon"></span>
      </button>
      <div classname="collapse navbar-collapse" id="navbarSupportedContent">
        <ul classname="navbar-nav me-auto mb-2 mb-lg-0">
          <li classname="nav-item">
            <a classname="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li classname="nav-item">
            <a classname="nav-link" href="/">Link</a>
          </li>
          <li classname="nav-item dropdown">
            <a classname="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Dropdown
            </a>
            <ul classname="dropdown-menu">
              <li><a classname="dropdown-item" href="/">Action</a></li>
              <li><a classname="dropdown-item" href="/">Another action</a></li>
              <li><hr classname="dropdown-divider"/></li>
              <li><a classname="dropdown-item" href="/">Something else here</a></li>
            </ul>
          </li>
          <li classname="nav-item">
            <a classname="nav-link disabled">Disabled</a>
          </li>
        </ul>
        <form classname="d-flex" role="search">
          <input classname="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button classname="btn btn-outline-success" type="submit">Search</button>
        </form>
                <div classname="form-check form-switch text-light">
          <input classname="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked />
          <label classname="form-check-label" for="flexSwitchCheckChecked">Enable Dark Mode</label>
        </div>
      </div>
    </div>
  </nav>

  )
}
