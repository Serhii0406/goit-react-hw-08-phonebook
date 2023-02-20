import * as React from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import styles from './AuthNav.module.css';

const AuthNav = () => {
  return (
    <>
      <Navbar.Brand className="ms-5">
        <NavLink
          exact="true"
          to="/register"
          className={({ isActive }) =>
            isActive ? styles['active-link'] : styles.link
          }
        >
          Registration
        </NavLink>
      </Navbar.Brand>
      <Navbar.Brand className="ms-5">
        <NavLink
          exact="true"
          to="/login"
          className={({ isActive }) =>
            isActive ? styles['active-link'] : styles.link
          }
        >
          Login
        </NavLink>
      </Navbar.Brand>
    </>
  );
};

export default AuthNav;