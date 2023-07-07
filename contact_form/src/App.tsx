/* import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { ContactPage, contactPageAction } from "./ContactPage";
import { ThankYouPage } from "./ThankYouPage";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";

function App() {
  return <RouterProvider router={router} />;
}
export default App;

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="contact" />,
  },
  {
    path: "/contact",
    element: <ContactPage />,
    action: contactPageAction, // 'action' handles form submission
  },
  {
    path: "/thank-you/:name",
    element: <ThankYouPage />,
  },
]);
 */

/////////////////////


import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { ContactPage } from "./ContactPage";
import { ThankYouPage } from "./ThankYouPage";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";

function App() {
  return <RouterProvider router={router} />;
}
export default App;

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="contact" />,
  },
  {
    path: "/contact",
    element: <ContactPage />,
  },
  {
    path: "/thank-you/:name",
    element: <ThankYouPage />,
  },
]);
