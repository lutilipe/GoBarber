import React from 'react';
import {
  RouteProps as ReactDomRouteProps,
  Route as ReactDomRoute,
  Redirect,
} from 'react-router-dom';
import { useAuth } from '../context/auth';

interface RouteProps extends ReactDomRouteProps {
  isPrivate?: boolean;
  component: React.ComponentType;
}

const Route: React.FC<RouteProps> = ({
  isPrivate = false,
  component: Component,
  ...rest
}) => {
  const { user } = useAuth();

  const isSigned = !!user;

  return (
    <ReactDomRoute
      {...rest}
      render={({ location }) => {
        return isPrivate === isSigned ? (
          <Component />
        ) : (
          <Redirect
            to={{
              pathname: isPrivate ? '/' : '/dashboard',
              state: {
                from: location,
              },
            }}
          />
        );
      }}
    />
  );
};

export default Route;
