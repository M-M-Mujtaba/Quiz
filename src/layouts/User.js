import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
// reactstrap components

import routes from "routes.js";

export class User extends Component {
  getRoutes = (routes) => {
    return routes.map((prop, key) => {
      if (prop.layout === "/User") {
        return (
          <Route
            path={prop.layout + prop.path}
            component={prop.component}
            key={key}
          />
        );
      } else {
        return null;
      }
    });
  };
  render() {
    return (
      <>
        <div className="main-content">
          {/* Page content */}
          <Switch>
            {this.getRoutes(routes)}
            <Redirect from="*" to="/User/Home" />
          </Switch>
        </div>
      </>
    );
  }
}

export default User;
