import React from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext'; // Assuming you have an AuthContext to provide authentication state

interface PrivateRouteProps extends RouteProps {
  // Component to render if the user is authenticated
  component: React.ComponentType<any>; 
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ component: Component, ...rest }) => {
  const { isAuthenticated } = useAuth(); // Get authentication state from context

  return (
    <Route
      {...rest}
      render={props =>
        isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" /> // Redirect to login if not authenticated
        )
      }
    />
  );
};

export default PrivateRoute;
