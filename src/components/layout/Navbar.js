import React from 'react';
import { Link } from 'react-router-dom';
import { useFirebase } from 'react-redux-firebase';

const Navbar = () => {
  const firebase = useFirebase();

  return (
    <nav className='navbar navbar-expand-sm navbar-light bg-white'>
      <div className='container'>
        <Link className='navbar-brand' to='/'>
          <img
            alt='logo'
            src={require('../../assets/logo.svg')}
            height='30px'
          />
        </Link>

        <ul className='navbar-nav mr-auto'></ul>
        <ul className='navbar-nav align-items-center'>
          <li className='nav-item'>
            <Link className='btn btn-secondary mr-3' to='/appiness_dashboard'>
              Appiness Dashboard
            </Link>
          </li>

          <li className='nav-item'>
            <Link className='btn btn-primary mr-3' to='/studentForm'>
              Add Student
            </Link>
          </li>
          <li className='nav-item dropdown'>
            <a
              className='nav-link dropdown-toggle'
              href='!#'
              id='navbarDropdown'
              data-toggle='dropdown'
            >
              <img
                className='rounded-circle'
                src={require('../../assets/admin.png')}
                alt='admin'
                height='35px'
              />
              <span className='ml-2 navbar-text'>Arijit Biswas</span>
            </a>
            <div className='dropdown-menu'>
              <a className='dropdown-item' href='!#'>
                Profile
              </a>
              <a
                className='dropdown-item'
                href='!#'
                onClick={() => firebase.logout()}
              >
                Logout
              </a>
              <div className='dropdown-divider'></div>
              <a className='dropdown-item' href='!#'>
                Ads
              </a>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
