import React from 'react';
import { useNavigate } from 'react-router-dom';
import bgImage from '../../assets/ghana.png';
import globeImage from '../../assets/globe.webp';
import './login.styles.css';

function Login(props) {
    const navigate = useNavigate();

    const redirectToHome = () => {
        localStorage.setItem("isLoggedIn", true);
        navigate('/')
    }

    return (
        <div className='login-page  overflow-hidden' style={{"background" : `url(${globeImage})`}}>
            <div className='container'>


                <div className='row align-items-center'>
                    <div className='col-md-6'>
                        <img className='login-bg-image' src={bgImage} alt='sajs'></img>

                    </div>
                    <div className='col-md-6'>
                        <div className="login-box">
                        <div className='text-center'>
                            <h3 className='text-uppercase bg-info text-white m-0' style={{"padding": "10px 20px"}}>Platform Name</h3>
                        </div>
                            <div className="card card-outline card-primary">
                                <div
                                    className="card-header text-center d-flex justify-content-center flex-column"
                                >
                                    <b className="h1">Login</b>
                                </div>
                                <div className="card-body">
                                    <p className="login-box-msg">Sign in to start your session</p>

                                    <form>
                                        <div className="input-group mb-3">
                                            <input type="email" className="form-control" placeholder="Email" />
                                            <div className="input-group-append">
                                                <div className="input-group-text">
                                                    <span className="fas fa-envelope"></span>

                                                </div>
                                            </div>
                                        </div>
                                        <div className="input-group mb-3">
                                            <input
                                                type="password"
                                                className="form-control"
                                                placeholder="Password"
                                            />
                                            <div className="input-group-append">
                                                <div className="input-group-text">
                                                    <span className="fas fa-lock"></span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-8">
                                                <div className="icheck-primary">
                                                    <input type="checkbox" id="remember" />
                                                    <label className="mx-3" htmlFor="remember"> Remember Me </label>
                                                </div>
                                            </div>

                                            <div className="col-4">

                                                <button type="submit" onClick={redirectToHome} className="btn btn-primary btn-block">
                                                    Sign In
                                                </button>
                                            </div>

                                        </div>
                                    </form>

                                    <p className="mb-1">
                                        <a href="forgot-password.html">I forgot my password</a>
                                    </p>
                                    <p className="mb-0">
                                        <a href="register.html" className="text-center">Register a new membership</a>
                                    </p>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;