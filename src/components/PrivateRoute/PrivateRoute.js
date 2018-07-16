import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from "react-router-dom";
import Auth from "../../server/Auth";

const PrivateRoute = ({ component: Component, ...rest }) => (
<Route {...rest} render={(props) => (
    Auth.isAuthenticated === true
      ? <Component {...props} />: <Redirect to='/login' />
)
}
/>
);

export default PrivateRoute;