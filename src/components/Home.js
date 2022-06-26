import React, { Component } from 'react';
import AccountBalance from './AccountBalance';
import { Link } from 'react-router-dom';
import styled from 'styled-components'
    
class Home extends Component {
  render() {

    const Wrapper = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 100vh;
    `
    const LandingImage = styled.div`
        display:flex
    `
    return (
        <Wrapper>
            <h1>Menu</h1>
                <Link to = "/userProfile">User Profile</Link>
                <Link to = "/login">Login</Link>
                <Link to = "/credits">Credits</Link>
                <Link to = "/debits">Debits</Link>
                <AccountBalance accountBalance = {this.props.accountBalance}/>
        </Wrapper>
    );
  }
}

export default Home;