import { useState } from "react";

export const useAuth = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const login = (role, id, password, navigate) => {
    setIsLoading(true);
    setErrorMessage(""); // Clear previous errors

    // Simulate async API call (you can replace with real authentication logic)
    setTimeout(() => {
      const users = {
        Admin: { id: "admin", password: "admin123" },
        "Sales Manager": { id: "manager", password: "manager123" },
        HR: { id: "hr", password: "hr123" },
        Labour: { id: "labour", password: "labour123" },
      };

      const user = users[role];
      if (user && user.id === id && user.password === password) {
        localStorage.setItem("userRole", role);
        navigate(`/${role.toLowerCase().replace(" ", "-")}-dashboard`);
      } else {
        setErrorMessage("Invalid credentials or role.");
      }

      setIsLoading(false);
    }, 1000);
  };

  return { login, isLoading, errorMessage };
};
