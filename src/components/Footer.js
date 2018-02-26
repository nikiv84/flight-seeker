import React from 'react';
import logo from '../assets/images/logo.svg';

const Footer = () => {
    const thisYear = (new Date()).getFullYear();
    return (
        <div>
            <footer>
                <h5><img src={logo} width="20" alt="logo" /> <strong>FlightSeeker</strong></h5>
                &copy; {thisYear} by <a title="GIT profile" rel="noreferrer noopener" target="_blank" href="https://github.com/nikiv84">Ivan Nikolic (nikiv84)</a>
            </footer>
        </div>
    );
};

export default Footer;