import PackagePage from "./PackagePage";
import EventPage from "./EventPage";
import { lazy } from "react";

const BlogPage = lazy(() => import("./blog"));
const UserPage = lazy(() => import("./user"));
const LoginPage = lazy(() => import("./login"));
const ProductsPage = lazy(() => import("./products"));
const Page404 = lazy(() => import("./page-not-found"));
const PackagePageHost = lazy(() => import("./package-host"));
const CRUDPackage = lazy(() => import("./CRUD_Package"));
const RevenueAdminPage = lazy(() => import("./revenueAdmin"));
const RegisterPage = lazy(() => import("./register"));
export {
  PackagePage,
  EventPage,
  UserPage,
  BlogPage,
  LoginPage,
  ProductsPage,
  Page404,
  PackagePageHost,
  CRUDPackage,
  RevenueAdminPage,
  RegisterPage,
};
