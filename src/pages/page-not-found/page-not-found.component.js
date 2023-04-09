import React from 'react';

function PageNotFound(props) {
    return (
        <div className="page-not-found">
            <h2 className="headline text-warning"> 404</h2>

            <div className="error-content">
                <h3><i className="fas fa-exclamation-triangle text-warning"></i> Oops! Page not found.</h3>

                <p>
                    We could not find the page you were looking for.
                    Meanwhile, you may <a href="../../index.html">return to dashboard</a> or try using the search form.
                </p>
            </div>
        </div>
    );
}

export default PageNotFound;