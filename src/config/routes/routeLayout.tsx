import React from "react";
import PrivateRoute from "./privateRoute";
import PublicRoute from "./publicRoute";

interface IRouteLayoutProps {
  path: string;
  element: any;
  isPrivate: boolean;
  authenticateRedirect: boolean;
  template: any;
  rest?: any;
}

const RouteLayout: React.FC<IRouteLayoutProps> = (props) => {
  const { path, element, isPrivate, authenticateRedirect, template, ...rest } =
    props;
  return isPrivate ? (
    <PrivateRoute path={path} element={element} template={template} {...rest} />
  ) : (
    <PublicRoute
      path={path}
      element={element}
      template={template}
      authenticateRedirect={authenticateRedirect}
      {...rest}
    />
  );
};

export default RouteLayout;
