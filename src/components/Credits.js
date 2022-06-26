import React, { Component } from 'react';
import AccountBalance from './AccountBalance';
import { Link } from 'react-router-dom';
import '../App.css';


class Credits extends Component {

    constructor() {
        super();
        this.state = {
            credit: {
                id: 'id',
                amount: 0,
                date: 'date',
                description: 'description'
            }
        }
    }

    displayCredits = () => {
        const {credits} = this.props;
        return credits.map((credit) => {
            return <div className = "list-item" key = {credit.id}> 
                        <div>{credit.amount}</div> 
                        <div>{credit.description}</div> 
                        <div>{credit.date}</div> 
                    </div>
        })
    }

    render() {
        return (
            <div>
                <h1 className='heading'>Credits</h1>
                <h5><AccountBalance accountBalance = {this.props.accountBalance}/></h5>
                {this.displayCredits()}
            </div>
        );
    }
}

export default Credits;
    