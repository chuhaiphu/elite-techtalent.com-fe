import { getAllCustomerContactsAction } from '@/actions/customer-contact-action';
import AdminPageContent from '../../../components/mains/admin-page-content/admin-page-content';
import { Suspense } from 'react';

export default async function AdminPage() {
  const customerContactsResultPromise = getAllCustomerContactsAction().then(
    (res) => res.data || []
  );

  return (
    <Suspense>
      <AdminPageContent
        customerContactsPromise={customerContactsResultPromise}
      />
    </Suspense>
  );
}
