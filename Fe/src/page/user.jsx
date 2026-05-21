// import { Helmet } from "react-helmet-async";

import { DashboardLayout } from "../layout";
import { UserView } from "../sections/user/view";

// ----------------------------------------------------------------------

export default function UserPage() {
  return (
    <>
      {/* <Helmet>
        <title> User | Minimal UI </title>
      </Helmet> */}
      <DashboardLayout>
        <UserView />
      </DashboardLayout>
    </>
  );
}
