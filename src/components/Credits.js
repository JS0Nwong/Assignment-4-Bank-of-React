import React, { Component } from "react";
import AccountBalance from "./AccountBalance";
import { TableHeadData, TableContainer, TableData } from "./TableStyles";
import "../App.css";
import { Link } from 'react-router-dom';

class Credits extends Component {
  constructor() {
    super();
    this.state = {
      credit: {
        id: "id",
        amount: 0,
        date: "date",
        description: "description",
      },
    };
  }

  displayCredits = () => {
    const { credits } = this.props;
    return credits.map((credit) => {
      return (
        <div className="list-item" key={credit.id}>
          <div>{credit.amount}</div>
          <div>{credit.description}</div>
          <div>{credit.date}</div>
        </div>
      );
    });
  };

  handleChange = (event) => {
    const tempCredit = { ...this.state.credit };
    if(event.target.name === "amount"){
      tempCredit.amount = event.target.value;
    }
    if(event.target.name === "description"){
      tempCredit.description = event.target.value;
    }
    this.setState({ credit: tempCredit });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.state.credit.date = new Date().toISOString();
    this.props.addCredit(this.state.credit);
  }

  render() {
    return (
      <div className="container-fluid">
      <div className = "row">

      <div className = 'col-md-2 navbar'>
              <h1 className='heading'>Bank of React</h1>
              <div className='nav'>
                  <button className = "button"><Link className = "link" to="/debits">Debits</Link></button>
                  <button className = "button"><Link className = "link" to="/credits">Credits</Link></button>
                  <button className = "button"><Link className = "link" to="/userprofile">User Profile</Link></button>
              </div>
      </div>

      <div className = "col-md-10">
        <div className = "header-container">
          <h1 className="m-2">Credits</h1>
          <h5 className="m-2">
            <AccountBalance accountBalance={this.props.accountBalance} />
          </h5>
        </div>
        <TableContainer className = "scroll">
          <table>
            <thead>
              <tr>
                <TableHeadData>Amount</TableHeadData>
                <TableHeadData>Description</TableHeadData>
                <TableHeadData>Date</TableHeadData>
              </tr>
            </thead>
            <tbody>
              {this.props.credits.map((obj) => {
                const values = Object.values(obj);
                return (
                  <tr key={values.at(0)} className="m-2">
                    <TableData>{"$" + values.at(2)}</TableData>
                    <TableData>{values.at(1)}</TableData>
                    <TableData>{values.at(3).split("T").at(0)}</TableData>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </TableContainer>
        <div class="submitform">
          <form onSubmit={this.handleSubmit}>
              <label>
              Description:
              <input type="text" name="description" value={this.state.description} onChange={this.handleChange} required/>&nbsp;&nbsp;
              Amount:
              <input type="number" step=".01" name="amount" value={this.state.amount} onChange={this.handleChange} required/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </label>
              <input type="submit" value="Submit" />
          </form>
        </div>
            </div>
          </div>
      </div>
    );
  }
}

export default Credits;
