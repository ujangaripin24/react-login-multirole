import React from 'react'
import { NavLink } from 'react-router-dom'
import { IoPerson, IoPricetag, IoHome, IoLogOut } from 'react-icons/io5'
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {Logout, reset} from '../features/authSlice'

const Sidebar = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {user} = useSelector((state) => state.auth)

    const logout = () => {
        dispatch(Logout())
        dispatch(reset());
        navigate('/login')
    }
  return (
    <div>
      <aside className="menu pl-2 has-shadow">
        <p className="menu-label">General</p>
        <ul className="menu-list">
          <li><NavLink to="/dashboard"><IoHome />Dashboard</NavLink></li>
          <li><NavLink to="/product"><IoPricetag />Product</NavLink></li>
        </ul>
        <p className="menu-label">Admin</p>
        <ul className="menu-list">
          <li>
            <NavLink to="/users"><IoPerson />User</NavLink>
          </li>
          <li>
            <a className="is-active">Manage Your Team</a>
            <ul>
              <li><a>Members</a></li>
              <li><a>Plugins</a></li>
              <li><a>Add a member</a></li>
            </ul>
          </li>
          <li><a>Invitations</a></li>
          <li><a>Cloud Storage Environment Settings</a></li>
          <li><a>Authentication</a></li>
        </ul>
        <p className="menu-label">Setting</p>
        <ul className="menu-list">
          <li>
            <button onClick={logout} className='button is-white'><IoLogOut />Logout</button>
          </li>
        </ul>
      </aside>
    </div>
  )
}

export default Sidebar