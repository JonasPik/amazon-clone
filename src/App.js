import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React, { useEffect } from "react";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import Payment from './Payment';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const promise = loadStripe('pk_test_51HxMHvGo7t6342j7hKwGUGhwJcC8XPyjMjv4auXgnxYFbDnYBxFhA0OLXiYcKctZXJ3aWPW9LWpwXYQL3pBwxkIq00xx8DQCP4');

function App() {

  const [{ }, dispatch] = useStateValue();

  useEffect(() => {
    // Will only run once when app component loads []
    auth.onAuthStateChanged(authUser => {
      console.log('USER IS >>>', authUser);

      if (authUser) {
        // User is logged in
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        // User is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])

  return (
    /* using BEM convention */
    <Router>
      <div className="app">

        <Switch>
          <Route path="/login">
            <Login />
          </Route>

          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>

          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>

          <Route path="/">
            <Header />
            <Home />
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
