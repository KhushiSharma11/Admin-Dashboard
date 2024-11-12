import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './useAuth';

const PrivateRoute = ({ children, role }) => {
  const { isAuthenticated, getUserRole } = useAuth();

  if (!isAuthenticated()) {
    return <Navigate to="/" replace />;
  }

  if (getUserRole() !== role) {
    return <Navigate to="/unauthorized" replace />;
  }

  return children;
};

export default PrivateRoute;
