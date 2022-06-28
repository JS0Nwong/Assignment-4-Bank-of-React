import React, { Component } from "react";
import AccountBalance from "./AccountBalance";
import { TableHeadData, TableContainer, TableData } from "./TableStyles";
import "../App.css";

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
      </div>
    );
  }
}

export default Credits;
