// import { Helmet } from "react-helmet-async";

import { DashboardLayout } from "../layout";
import { RevenueAdminView } from "../sections/revenueAdmin/view";

// ----------------------------------------------------------------------

export default function RevenueAdminPage() {
  return (
    <>
      {/* <Helmet>
        <title> User | Minimal UI </title>
      </Helmet> */}
      <DashboardLayout>
        <RevenueAdminView />
      </DashboardLayout>
    </>
  );
}
