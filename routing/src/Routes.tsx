import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import { Header } from "./Header";
import { Customer } from "./pages/Customer";
import { CustomerHistory } from "./pages/CustomerHistory";
import { CustomerProfile } from "./pages/CustomerProfile";
import { CustomerTasks } from "./pages/CustomerTasks";
import { ErrorPage } from "./pages/ErrorPage";
import { HomePage } from "./pages/HomePage";
import { Products } from "./pages/Products";
import { ProductsPage } from "./pages/ProductsPage";

/* const router = createBrowserRouter([
    {
    path: "/",
    element: <Header />,
    },
  {
    path: "products",
    element: <ProductsPage />,
  },
]);

export function Routes() {
  return <RouterProvider router={router} />;
} */

////////////////////

/*
const router = createBrowserRouter([
  {
    path: "customer/:id",
    element: <Customer />,
    children: [
      {
        path: "profile",
        element: <CustomerProfile />,
      },
      {
        path: "history",
        element: <CustomerHistory />,
      },
      {
        path: "tasks",
        element: <CustomerTasks />,
      },
    ],
  },
]);

export function Routes() {
  return <RouterProvider router={router} />;
}
*/

//////////////////////

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "products/:id",
        element: <ProductsPage />,
      },
    ],
  },
]);

export function Routes() {
  return <RouterProvider router={router} />;
}
