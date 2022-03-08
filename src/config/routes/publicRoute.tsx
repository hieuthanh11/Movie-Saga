import React from "react";
import { Redirect, Route, RouteProps } from "react-router-dom";

interface PublicRouteProps extends RouteProps {
  element: any;
  path: string;
  template: any;
  authenticateRedirect: boolean;
}

const PublicRoute: React.FC<PublicRouteProps> = ({
  element,
  path,
  template,
  authenticateRedirect,
  ...rest
}) => {
  const isAuthenticated = localStorage.getItem("token");

  return (
    <Route
      path={path}
      render={(props) =>
        !(isAuthenticated && authenticateRedirect) ? (
          React.createElement(
            template,
            { ...props, ...rest },
            React.createElement(element, { ...props, ...rest })
          )
        ) : (
          <Redirect to='/' />
        )
      }
      {...rest}
    />
  );
};

export default PublicRoute;
