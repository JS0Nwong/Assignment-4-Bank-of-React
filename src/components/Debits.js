import React, { Component } from "react";
import AccountBalance from "./AccountBalance";
import { TableHeadData, TableContainer, TableData } from "./TableStyles";
import "../App.css";
import { Link } from "react-router-dom";

class Debits extends Component {
  constructor() {
    super();
    this.state = {
      debit: {
        id: "id",
        amount: 0,
        date: "date",
        description: "description",
      },
    };
  }

  handleChange = (event) => {
    const tempDebit = { ...this.state.debit };
    if (event.target.name === "amount") {
      tempDebit.amount = event.target.value;
    }
    if (event.target.name === "description") {
      tempDebit.description = event.target.value;
    }
    this.setState({ debit: tempDebit });
  };

  handleSubmit = (event) => {
    event.target.reset();
    event.preventDefault();
    this.setState(
      (prevState) => ({
        debit: {
          ...prevState.debit,
          date: new Date().toISOString(),
        },
      }),
      () => this.props.addDebit(this.state.debit)
    );
  };

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-2 navbar">
            <h1 className="heading">Bank of React</h1>
            <div className="nav">
              <Link className="link" to="/debits">
                <button className="button">Debits</button>
              </Link>

              <Link className="link" to="/credits">
                {" "}
                <button className="button">Credits</button>
              </Link>

              <Link className="link" to="/userprofile">
                <button className="button">User Profile</button>
              </Link>
            </div>
          </div>

          <div className="col-md-10">
            <div className="header-container">
              <h1 className="m-2">Debits</h1>
              <h5 className="m-2">
                <AccountBalance accountBalance={this.props.accountBalance} />
              </h5>
            </div>
            <TableContainer className="scroll">
              <table>
                <thead>
                  <tr>
                    <TableHeadData>Amount</TableHeadData>
                    <TableHeadData>Description</TableHeadData>
                    <TableHeadData>Date</TableHeadData>
                  </tr>
                </thead>
                <tbody>
                  {this.props.debits.map((obj) => {
                    const values = Object.values(obj);
                    const dateTime = values.at(3).split("T");
                    return (
                      <tr key={values.at(0)} className="m-2">
                        <TableData>{"$" + values.at(2)}</TableData>
                        <TableData>{values.at(1)}</TableData>
                        <TableData>
                          {dateTime.at(0) + " ─ " + dateTime.at(1).substr(0, 5)}
                        </TableData>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </TableContainer>
            <div className="submitform">
              <form onSubmit={this.handleSubmit}>
                <label>
                  Description:
                  <input
                    type="text"
                    name="description"
                    value={this.state.description}
                    onChange={this.handleChange}
                    required
                  />
                  &nbsp;&nbsp; Amount:
                  <input
                    type="number"
                    step=".01"
                    name="amount"
                    value={this.state.amount}
                    onChange={this.handleChange}
                    required
                  />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
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

export default Debits;
