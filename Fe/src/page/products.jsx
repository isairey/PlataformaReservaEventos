import { DashboardLayout } from "../layout";
import { ProductsView } from "../sections/products/view";

// ----------------------------------------------------------------------

export default function ProductsPage() {
  return (
    <>
      <DashboardLayout>
        <ProductsView />
      </DashboardLayout>
    </>
  );
}
