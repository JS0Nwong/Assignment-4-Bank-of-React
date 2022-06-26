import React, { Component } from 'react';
import AccountBalance from './AccountBalance';
import { Link } from 'react-router-dom';
import '../App.css';


class Debits extends Component {
    constructor() {
        super();
        this.state = {
            debit: {
                id: 'id',
                amount: 0,
                date: 'date',
                description: 'description'
            }
        }
    }

    displayDebits = () => {
        const {debits} = this.props;
        return debits.map((debit) => {
            return <div className = "list-item" key = {debit.id}> 
                        <div>{debit.amount}</div> 
                        <div>{debit.description}</div> 
                        <div>{debit.date}</div> 
                    </div>
        })
    }

    render() {
        return (
            <div>
                <h1 className='heading'>Debits</h1>
                <h5><AccountBalance accountBalance = {this.props.accountBalance}/></h5>
                <div className='table-heading'>
                    <h3>Amount</h3>
                    <h3>Description</h3>
                    <h3>Date</h3>
                </div>
                {this.displayDebits()}
                
            </div>
        );
    }
}

export default Debits;
    