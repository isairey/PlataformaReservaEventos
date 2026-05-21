import LayoutWeb from "./LayoutWeb";
import LayoutEvent from "./LayoutEvent";
import { lazy } from "react";
const DashboardLayout = lazy(() => import("./dashboard/index"));
export { LayoutWeb, LayoutEvent, DashboardLayout };
