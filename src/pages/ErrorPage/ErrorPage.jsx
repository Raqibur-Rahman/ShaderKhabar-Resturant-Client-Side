import React from 'react';
import logo from '../../assets/404.png';
import './ErrorPage.css';

const ErrorPage = () => {
    return (
        <div className="error-page-container">
            <img src={logo} alt="404 Error" />
        </div>
       
    );
};

export default ErrorPage;
