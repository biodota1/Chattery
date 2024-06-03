import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

import Root from "./routes/Root";
import ErrorPage from "./ErrorPage";
import Home from "./routes/Home";
import Message from "./routes/Message";
import MessageBox from "./routes/MessageBox";
import Signin from "./routes/Signin";
import Signup from "./routes/Signup";

const router = createBrowserRouter([
  {
    element: <Root />,
    // errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        element: <Message />,
        children: [
          {
            path: "/message",
            element: <MessageBox />,
          },
        ],
      },
      { path: "signin", element: <Signin /> },
      { path: "signup", element: <Signup /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
