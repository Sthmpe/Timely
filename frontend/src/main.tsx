import React from "react";
import ReactDOM from "react-dom/client";
import "./global.css";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./AppRoutes";

/**
 * Entry Point
 * 
 * This is the entry point of the React application.
 * It renders the root component of the application inside the DOM.
 * 
 * Libraries Used:
 * - React: Library for building user interfaces.
 * - ReactDOM: Library for rendering React components into the DOM.
 * - react-router-dom: Library for routing in React applications.
 * 
 * Components Used:
 * - Router: Component for providing routing functionality to the application.
 * - AppRoutes: Component defining the routes of the application.
 */

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router>
      <AppRoutes />
    </Router>
  </React.StrictMode>,
);
