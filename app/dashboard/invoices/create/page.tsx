import { fetchCustomers } from "@/app/lib/data";
import Breadcrumbs from "@/app/ui/invoices/breadcrumbs";
import Form from "@/app/ui/invoices/create-form";

export default async function Page() {
  const customers = await fetchCustomers();
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: "发票", href: "/dashboard/invoices" },
          { label: "创建发票", href: "/dashboard/invoices/create" },
        ]}
      />
      <Form customers={customers} />
    </main>
  );
}
