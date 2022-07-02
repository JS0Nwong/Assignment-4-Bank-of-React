import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import axios from "axios";

// Import other components
import Home from "./components/Home";
import UserProfile from "./components/UserProfile";
import LogIn from "./components/Login";
import Credits from "./components/Credits";
import Debits from "./components/Debits";
import { sortByDate } from "./helpers/utils";

class App extends Component {
  constructor() {
    // Create and initialize state
    super();
    this.state = {
      accountBalance: 1234567.89,
      currentUser: {
        userName: "Joe Smith",
        memberSince: "11/22/99",
      },
      credits: [],
      debits: [],
    };
  }

  addCredit = (e) => {
    let newCredits = [...this.state.credits];

    let credit = {
      id: e.id,
      description: e.description,
      amount: e.amount,
      date: e.date,
    };

    newCredits.push(credit);

    let total = (Number(this.state.accountBalance) + Number(e.amount)).toFixed(
      2
    );

    this.setState({ credits: newCredits });
    this.setState({ accountBalance: total });
  };

  addDebit = (e) => {
    let newDebits = [...this.state.debits];

    let debit = {
      id: e.id,
      description: e.description,
      amount: e.amount,
      date: e.date,
    };

    newDebits.push(debit);

    let total = (Number(this.state.accountBalance) - Number(e.amount)).toFixed(
      2
    );

    this.setState({ debits: newDebits });
    this.setState({ accountBalance: total });
  };

  // Update state's currentUser (userName) after "Log In" button is clicked
  mockLogIn = (logInInfo) => {
    const newUser = { ...this.state.currentUser };
    newUser.userName = logInInfo.userName;
    this.setState({ currentUser: newUser });
  };

  async componentDidMount() {
    let credits = await axios
      .get("https://moj-api.herokuapp.com/credits")
      .then((res) => res.data);
    let debits = await axios
      .get("https://moj-api.herokuapp.com/debits")
      .then((res) => res.data);

    let creditsSum = 0;
    let debitsSum = 0;

    credits.forEach((credit) => {
      creditsSum += credit.amount;
    });

    debits.forEach((debit) => {
      debitsSum += debit.amount;
    });

    let accountBalance = (creditsSum - debitsSum).toFixed(2);

    sortByDate(debits);
    sortByDate(credits);

    this.setState({ debits, credits, accountBalance });
  }

  // Create Routes and React elements to be rendered using React components
  render() {
    const { credits } = this.state;
    const { debits } = this.state;

    // Create React elements
    const HomeComponent = () => (
      <Home accountBalance={this.state.accountBalance} />
    );
    const UserProfileComponent = () => (
      <UserProfile
        userName={this.state.currentUser.userName}
        memberSince={this.state.currentUser.memberSince}
      />
    );
    const LogInComponent = () => (
      <LogIn user={this.state.currentUser} mockLogIn={this.mockLogIn} />
    ); // Pass props to "LogIn" component

    const CreditsComponent = () => (
      <Credits
        addCredit={this.addCredit}
        credits={credits}
        accountBalance={this.state.accountBalance}
      />
    );

    const DebitsComponent = () => (
      <Debits
        addDebit={this.addDebit}
        debits={debits}
        accountBalance={this.state.accountBalance}
      />
    );

    // Important: Include the "basename" in Router, which is needed for deploying the React app to GitHub Pages
    return (
      <Router>
        <div>
          <Route exact path="/" render={HomeComponent} />
          <Route exact path="/userProfile" render={UserProfileComponent} />
          <Route exact path="/login" render={LogInComponent} />
          <Route exact path="/credits" render={CreditsComponent} />
          <Route exact path="/debits" render={DebitsComponent}></Route>
        </div>
      </Router>
    );
  }
}

export default App;
