import React from 'react';
import './side-bar.styles.css';
import { Link, NavLink } from 'react-router-dom';

function SideBar(props) {
  const isActiveLink = ({ isActive }) => isActive ? "nav-link active" : "nav-link";
  return (
    <aside className="main-sidebar">
      <Link className="brand-link" to={'/'}>
        <img src="https://www.un.org/sites/un2.un.org/themes/bootstrap_un2/images/logo-en.svg" alt="AdminLTE Logo" className="brand-logo" />
      </Link>

      <div className="sidebar">
        <nav className="mt-2">
          <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
            <li className="nav-item">
              <NavLink to="/" className={isActiveLink}>
                <i className="nav-icon fas fa-tachometer-alt"></i>
                <p className='ml-1'>
                  Dashboard
                </p>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/users" className={isActiveLink}>
                <i className="nav-icon fas fa-users"></i>
                <p className='ml-1'>
                  Users
                </p>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/projects" className={isActiveLink}>
                <i className="nav-icon fas fa-project-diagram"></i>
                <p className='ml-1'>
                  Projects
                </p>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/support" className={isActiveLink}>
                <i className="nav-icon fas fa-user-plus"></i>
                <p className='ml-1'>
                  Support
                </p>
              </NavLink>
            </li>

            {/* <li className="nav-item">
              <a href="/" className="nav-link">
                <i className="nav-icon fas fa-edit"></i>
                <p>
                  Budjet Management
                  <i className="fas fa-angle-left right"></i>
                </p>
              </a>
              <ul className="nav nav-treeview">
                <li className="nav-item">
                  <a href="pages/forms/general.html" className="nav-link">
                    <i className="far fa-circle nav-icon"></i>
                    <p>Allocated</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="pages/forms/advanced.html" className="nav-link">
                    <i className="far fa-circle nav-icon"></i>
                    <p>Released</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="pages/forms/editors.html" className="nav-link">
                    <i className="far fa-circle nav-icon"></i>
                    <p>Received</p>
                  </a>
                </li>

              </ul>
            </li> */}




          </ul>
        </nav>
      </div>
    </aside >
  );
}

export default SideBar;