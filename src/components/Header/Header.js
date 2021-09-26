import React from 'react';
import './Header.css';
const Header = () => {
    return (
        <div className="container">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fluid">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/School">AR High School</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <a className="nav-link active" aria-current="page" href="/Home">Home</a>
                            <a className="nav-link" href="/Features">Features</a>
                            <a className="nav-link" href="/Members">Members</a>
                        </div>
                    </div>
                </div>
            </nav>
            <div className="header-title">
                <h1 className="">Make a School Managing Committee</h1>
                <h5>The responsibility of the School Management Committee and Parents</h5>
                <h3>Total Buget: 100K</h3>
                <hr />
            </div>
        </div>
    );
};

export default Header;