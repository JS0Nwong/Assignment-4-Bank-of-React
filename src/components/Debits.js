import React, { Component } from "react";
import AccountBalance from "./AccountBalance";
import { TableHeadData, TableContainer, TableData } from "./TableStyles";
import "../App.css";

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

  displayDebits = () => {
    const { debits } = this.props;
    return debits.map((debit) => {
      return (
        <div className="list-item" key={debit.id}>
          <div>{debit.amount}</div>
          <div>{debit.description}</div>
          <div>{debit.date}</div>
        </div>
      );
    });
  };

  render() {
    return (
      <div className="flex-center-column-aligned">
        <h1 className="m-2">Credits</h1>
        <h5 className="m-2">
          <AccountBalance accountBalance={this.props.accountBalance} />
        </h5>
        <TableContainer>
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
                return (
                  <tr key={values.at(0)} className="m-2">
                    <TableData>{values.at(2)}</TableData>
                    <TableData>{values.at(1)}</TableData>
                    <TableData>{values.at(3).split("T").at(0)}</TableData>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </TableContainer>
      </div>
    );
  }
}

export default Debits;
