import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import AdminLayout from "layouts/Admin.js";
import UserLayout from "layouts/User.js";
import AuthLayout from "layouts/Auth.js";
import { isLoggedIn } from "Provider/Auth";
import { isAdminLogged } from "Provider/Auth";

var isAdmin = isAdminLogged();
export const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        {isLoggedIn() ? (
          <>
            {isAdmin === "false" ? (
              <>
                <Route
                  path="/User"
                  render={(props) => <UserLayout {...props} />}
                />
                <Redirect from="/" to="/User/Home" />
                <Redirect to="/User/Home" />
              </>
            ) : (
              <>
                <Route
                  path="/admin"
                  render={(props) => <AdminLayout {...props} />}
                />
                <Redirect from="/" to="/admin/index" />
                <Redirect to="/admin/index" />
              </>
            )}
          </>
        ) : (
          <>
            <Route path="/auth" render={(props) => <AuthLayout {...props} />} />
            <Redirect from="/" to="/auth/login" />
            <Redirect to="/auth/login" />
          </>
        )}
      </Switch>
    </BrowserRouter>
  );
};

export default App;
