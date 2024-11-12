import React from "react";
import { useNavigate } from "react-router-dom";

const Unauthorized = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h2>You are not authorized to view this page</h2>
      <button onClick={() => navigate("/")}>Go to Login</button>
    </div>
  );
};

export default Unauthorized;
