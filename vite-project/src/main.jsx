import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { UserProvider } from "./Context/UserContext.jsx";


ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <UserProvider>
      
        <App />
      
    </UserProvider>
  </StrictMode>
);
