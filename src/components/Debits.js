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

    handleSubmit(event){
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <h1 className='heading'>Debits</h1>
                <h5><AccountBalance accountBalance = {this.props.accountBalance.toFixed(2)}/></h5>
                <div className='table-heading'>
                    <h3>Amount</h3>
                    <h3>Description</h3>
                    <h3>Date</h3>
                </div>
                {this.displayDebits()}
                <form onSubmit={this.handleSubmit}>
                    <label>
                    Description:
                    <input type="text" value={this.state.debit.description} onChange={this.handleChange} />
                    Amount:
                    <input type="number" value={this.state.debit.amount} onChange={this.handleChange} />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}

export default Debits;
    