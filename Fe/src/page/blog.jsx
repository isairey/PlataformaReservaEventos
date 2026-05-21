import { BlogView } from "../sections/blog/view";
import { DashboardLayout } from "../layout";

// ----------------------------------------------------------------------

export default function BlogPage() {
  return (
    <>
      <DashboardLayout>
        <BlogView />
      </DashboardLayout>
    </>
  );
}
