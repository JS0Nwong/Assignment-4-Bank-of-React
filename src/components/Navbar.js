import React, { Component } from 'react';
import AccountBalance from './AccountBalance';
import { Link } from 'react-router-dom';
import '../App.css';

class Navbar extends Component {
    render() {
        return (
            <div className = 'navbar'>
                <h1 className='heading'>Bank of React</h1>
                <div className='nav'>
                    <button><Link className = "link" to="/debits">Debits</Link></button>
                    <button><Link className = "link" to="/credits">Credits</Link></button>
                    <button><Link className = "link" to="/userprofile">User Profile</Link></button>
                </div>
            </div>
        );
    }
}

export default Navbar;