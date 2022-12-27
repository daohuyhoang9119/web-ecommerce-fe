import React, { Component } from "react";
import rootRoutes from "./components/admin/rootRoutes";
import Auth from "./components/auth";
import NoMatch from "./components/nomatch";
import { Switch, Route, BrowserRouter, Redirect } from "react-router-dom";
// import PrivateRoute from './components/auth/PrivateRoute';
<<<<<<< HEAD
import { getCookie } from "./function";

import { NotificationContainer } from "react-notifications";
import "react-notifications/lib/notifications.css";
import "./admin-style.scss";
import "./styles.scss";
export default class Admin extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <NotificationContainer />
          <Switch>
            <Route path="/admin" component={rootRoutes} />
            {/* {getCookie('token') ? <Route path='/admin' component={rootRoutes} /> : <Redirect to={"/auth/login"} />}
=======

import { getCookie } from './function';

import { NotificationContainer } from "react-notifications";
import "react-notifications/lib/notifications.css";


export default class Admin extends Component {
	render() {
		return (
			<div className="admin">
				<BrowserRouter>
				<NotificationContainer />
					<Switch>
						<Route path='/admin' component={rootRoutes} />
						{/* {getCookie('token') ? <Route path='/admin' component={rootRoutes} /> : <Redirect to={"/auth/login"} />}
>>>>>>> nhatrang
						{getCookie('token') ? <Redirect to={"/admin"} /> : <Redirect to={"/auth/login"} />}
						<Route component={NoMatch} /> */}
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

