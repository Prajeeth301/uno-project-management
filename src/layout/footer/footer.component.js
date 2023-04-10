import React from 'react';
import { Link } from 'react-router-dom';

function Footer(props) {
    return (
        <footer className="main-footer">
            <strong>Copyright &copy; 2012-{new Date().getFullYear()} <Link to="/">Agtech Innovation Labs</Link>.</strong>
            All rights reserved.
            <div className="float-right d-none d-sm-inline-block">
                <b>Version</b> 3.2.0
            </div>
        </footer>
    );
}

export default Footer;