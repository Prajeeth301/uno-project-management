import React from 'react';
import { useNavigate } from 'react-router-dom';

function Login(props) {
    const navigate = useNavigate();

    const redirectToHome = () => {
        navigate('/');
    }

    return (
        <div className='login-page'>
            <div className="login-box">
                <div className="card card-outline card-primary">
                    <div
                        className="card-header text-center d-flex justify-content-center flex-column"
                    >
                        <b className="h1">Login</b>
                        <div className="img">
                            <img src="./UNO image.jpg" alt='' />
                        </div>
                    </div>
                    <div className="card-body">
                        <p className="login-box-msg">Sign in to start your session</p>

                        <form action="../../index3.html" method="post">
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
                                        <label className="mx-3" for="remember"> Remember Me </label>
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
    );
}

export default Login;