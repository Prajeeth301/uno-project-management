import React from 'react';
import { Link } from 'react-router-dom';
import './header.styles.css';

function Header(props) {
  return (
    <nav className="main-header navbar navbar-expand navbar-white navbar-light justify-content-between">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link" data-widget="pushmenu" to="/" role="button"><i className="fas fa-bars"></i></Link>
        </li>
        {/* <li className="nav-item">
              <Link className="nav-link" to={'/dashboard'}>Dashboard</Link>
            </li> */}

        <form className="form-inline ml-3">
          <div className="input-group input-group-sm">
            <input className="form-control form-control-navbar" type="search" placeholder="Search" aria-label="Search" />
            <div className="input-group-append">
              <button className="btn btn-navbar" type="submit">
                <i className="fas fa-search"></i>
              </button>
            </div>
          </div>
        </form>
      </ul>

      <h4 className='text-uppercase text-info m-0' >Platform Name</h4>

      <ul className="navbar-nav">
        <li className="nav-item dropdown">
          <Link className="nav-link" data-toggle="dropdown" to="/">
            <i className="far fa-comments"></i>
            <span className="badge badge-danger navbar-badge">3</span>
          </Link>
          <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
            <Link href="#" className="dropdown-item">
              <div className="media">
                <img src="../../dist/img/user1-128x128.jpg" alt="User Avatar" className="img-size-50 mr-3 img-circle" />
                <div className="media-body">
                  <h3 className="dropdown-item-title">
                    Brad Diesel
                    <span className="float-right text-sm text-danger"><i className="fas fa-star"></i></span>
                  </h3>
                  <p className="text-sm">Call me whenever you can...</p>
                  <p className="text-sm text-muted"><i className="far fa-clock mr-1"></i> 4 Hours Ago</p>
                </div>
              </div>
            </Link>
            <div className="dropdown-divider"></div>
            <Link to="/" className="dropdown-item">
              <div className="media">
                <img src="../../dist/img/user8-128x128.jpg" alt="User Avatar" className="img-size-50 img-circle mr-3" />
                <div className="media-body">
                  <h3 className="dropdown-item-title">
                    John Pierce
                    <span className="float-right text-sm text-muted"><i className="fas fa-star"></i></span>
                  </h3>
                  <p className="text-sm">I got your message bro</p>
                  <p className="text-sm text-muted"><i className="far fa-clock mr-1"></i> 4 Hours Ago</p>
                </div>
              </div>
            </Link>
            <div className="dropdown-divider"></div>
            <Link to="/" className="dropdown-item">
              <div className="media">
                <img src="../../dist/img/user3-128x128.jpg" alt="User Avatar" className="img-size-50 img-circle mr-3" />
                <div className="media-body">
                  <h3 className="dropdown-item-title">
                    Nora Silvester
                    <span className="float-right text-sm text-warning"><i className="fas fa-star"></i></span>
                  </h3>
                  <p className="text-sm">The subject goes here</p>
                  <p className="text-sm text-muted"><i className="far fa-clock mr-1"></i> 4 Hours Ago</p>
                </div>
              </div>
            </Link>
            <div className="dropdown-divider"></div>
            <a href="/" className="dropdown-item dropdown-footer">See All Messages</a>
          </div>
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-link" data-toggle="dropdown" href="/">
            <i className="far fa-bell"></i>
            <span className="badge badge-warning navbar-badge">15</span>
          </Link>
          <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
            <span className="dropdown-item dropdown-header">15 Notifications</span>
            <div className="dropdown-divider"></div>
            <Link href="/" className="dropdown-item">
              <i className="fas fa-envelope mr-2"></i> 4 new messages
              <span className="float-right text-muted text-sm">3 mins</span>
            </Link>
            <div className="dropdown-divider"></div>
            <Link href="/" className="dropdown-item">
              <i className="fas fa-file mr-2"></i> 3 new reports
              <span className="float-right text-muted text-sm">2 days</span>
            </Link>
            <div className="dropdown-divider"></div>
            <Link href="/" className="dropdown-item dropdown-footer">See All Notifications</Link>
          </div>
        </li>
        <li>
        <div className='nav-link'>Welcome <strong className='text-pink text-uppercase'>Dominic</strong></div>
        </li>
        <li className="nav-item dropdown ml-2">
            
            <Link className="nav-link user" data-toggle="dropdown" href="/">
              <i className="fas fa-user"></i>
            </Link>
          <div className="dropdown-menu dropdown-menu-sm dropdown-menu-right">
            <div className="dropdown-divider"></div>
            <Link to="/login" className="dropdown-item">
              <div className='text-center'>Logout</div>
            </Link>
          </div>
        </li>


      </ul>
    </nav>
  );
}

export default Header;