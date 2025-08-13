import { createBrowserRouter } from "react-router-dom";
import { AuthLayout } from "../layouts/AuthLayout";
import { DashboardLayout } from "../layouts/DashboardLayout";

import { LoginPage } from "../pages/auth/LoginPage";
import { RegisterPage } from "../pages/auth/RegisterPage";

import { DashboardPage } from "../pages/dashboard/DashboardPage";
import { ProductsPage } from "../pages/products/ProductsPage";
import { ProductDetailsPage } from "../pages/products/ProductDetailsPage";
import { NewProductPage } from "../pages/products/NewProductPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AuthLayout />,
    children: [
      {
        path: "/",
        element: <LoginPage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/register",
        element: <RegisterPage />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "/dashboard",
        element: <DashboardPage />,
      },
      {
        path: "/dashboard/products",
        element: <ProductsPage />,
      },
      {
        path: "/dashboard/products/:id",
        element: <ProductDetailsPage />,
      },
      {
        path: "/dashboard/products/new",
        element: <NewProductPage />,
      },
    ],
  },
]);
