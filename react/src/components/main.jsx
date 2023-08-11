import React from "react";
import ReactDOM from "react-dom/client";
import Register from "./register.jsx";
import App from "./login.jsx";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";

const router = createrBrowserRouter([
  {
    path: "/",
    element: <Register />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
