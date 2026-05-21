// import { Helmet } from "react-helmet-async";

import { DashboardLayout } from "../layout";
import { PackageView } from "../sections/package_host/view";

// ----------------------------------------------------------------------

export default function UserPage() {
  return (
    <>
      {/* <Helmet>
        <title> User | Minimal UI </title>
      </Helmet> */}
      <DashboardLayout>
        <PackageView />
      </DashboardLayout>
    </>
  );
}
