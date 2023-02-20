import * as React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Navbar from 'react-bootstrap/Navbar';

import styles from './Navigation.module.css';
import UserMenu from 'components/UserMenu/UserMenu';
import AuthNav from 'components/AuthNav/AuthNav';
import { authSelectors } from '../../redux/auth';

const Navigation = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <>
      <Navbar bg="light" expand="lg" className="justify-content-center">
        <Navbar.Brand>
          <NavLink
            exact="true"
            to="/"
            className={({ isActive }) =>
              isActive ? styles['active-link'] : styles.link
            }
          >
            Home
          </NavLink>
        </Navbar.Brand>

        {isLoggedIn ? (
          <>
            <Navbar.Brand>
              <NavLink
                to="/contacts"
                className={({ isActive }) =>
                  isActive ? styles['active-link'] : styles.link
                }
              >
                Contacts
              </NavLink>
            </Navbar.Brand>{' '}
            <Navbar.Brand>
              <UserMenu />
            </Navbar.Brand>
          </>
        ) : (
          <AuthNav />
        )}
      </Navbar>
    </>
  );
};

export default Navigation;