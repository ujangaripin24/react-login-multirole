import React from 'react'
import { NavLink } from 'react-router-dom'
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {Logout, reset} from "../features/authSlice";

const Navbar = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {user} = useSelector((state) => state.auth)

    console.log(user)
    const logout = () => {
        dispatch(Logout())
        dispatch(reset());
        navigate('/login')
    }
  return (
    <div>
      <nav className="navbar is-fixed-top has-shadow" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <NavLink to="/dashboard" className="navbar-item" href="https://bulma.io">
            <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" alt='Logo'/>
          </NavLink>

          <a href='#' role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            <a className="navbar-item">
              Home
            </a>

            <a className="navbar-item">
              Documentation
            </a>

            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link">
                More
              </a>

              <div className="navbar-dropdown">
                <a className="navbar-item">
                  About
                </a>
                <a className="navbar-item">
                  Jobs
                </a>
                <a className="navbar-item">
                  Contact
                </a>
                <hr className="navbar-divider"/>
                  <a className="navbar-item">
                    Report an issue
                  </a>
              </div>
            </div>
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <a className="button is-primary">
                  <strong>Sign up</strong>
                </a>
                <button onClick={logout} className="button is-light">
                  Log Out
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar