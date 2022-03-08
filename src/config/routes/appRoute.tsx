import React from "react";
import { Switch } from "react-router-dom";
import IndexRoutes from "./indexRoute";
import RouteLayout from "./routeLayout";

const AppRoute: React.FC = () => {
  return (
    <Switch>
      {IndexRoutes.map(
        (
          { path, element, isPrivate, authenticateRedirect, template, ...rest },
          index
        ) => {
          return (
            <RouteLayout
              key={index}
              path={path}
              element={element}
              isPrivate={isPrivate}
              authenticateRedirect={authenticateRedirect}
              template={template}
              {...rest}
            />
          );
        }
      )}
    </Switch>
  );
};

export default AppRoute;
