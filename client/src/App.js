import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";
import { Provider } from "react-redux";
import store from "./store";
import PrivateRoute from "./components/private-route/PrivateRoute";
import Dashboard from "./components/dashboard/Dashboard";
import {Homepage} from "./containers/HomePage";
import { CustomerAccessPage } from './containers/CustomerAccessPage';
import Profile  from './containers/ProfilePage';
import SearchInstructor from './containers/SearchInstructor';
import RateInstructor from './containers/RateInstructor';
import UsersList from './containers/UsersList';

// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
// Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Redirect to login
    window.location.href = "./login";
  }
}


function App() {
  return (
    <Provider store={store}>
          <div className="App">
          <Router>
              <Switch>
                <Route exact path="/" component={Homepage} />
                <Route path="/customer/access/:action" exact component={CustomerAccessPage} />
                <PrivateRoute path="/profile" exact component={Profile} />
                <Route path="/search_instructor" exact component={SearchInstructor} />
                <PrivateRoute path="/rate_instructor" exact component={RateInstructor} />
                <PrivateRoute path="/users_list" exact component={UsersList} />
              </Switch>
            </Router>
          </div>
      </Provider>
  );
}

export default App;
