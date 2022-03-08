import React from "react";
import { Redirect, Route } from "react-router-dom";

interface IPrivateRouteProps {
  path: string;
  element: any;
  template: any;
  rest?: any;
}

const PrivateRoute: React.FC<IPrivateRouteProps> = ({
  element,
  path,
  template,
  ...rest
}) => {
  const isAuthenticated = localStorage.getItem("token");

  return (
    <Route
      path={path}
      render={(props) =>
        isAuthenticated ? (
          React.createElement(
            element,
            { ...props, ...rest },
            React.createElement(template, { ...props, ...rest })
          )
        ) : (
          <Redirect to='/login' />
        )
      }
      {...rest}
    />
  );
};

export default PrivateRoute;
