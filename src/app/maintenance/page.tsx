import { Suspense } from 'react';
import { redirect } from 'next/navigation';
import { getAppConfigAction } from '@/actions/app-config-action';
import MaintenancePageContent from '@/components/mains/maintenance-page-content/maintenance-page-content';

async function MaintenancePageWrapper() {
  const appConfigResponse = await getAppConfigAction();
  const isMaintenanceMode = appConfigResponse.success
    ? appConfigResponse.data?.maintenanceMode
    : false;

  if (!isMaintenanceMode) {
    redirect('/');
  }
  return <MaintenancePageContent />;
}

export default function MaintenancePage() {
  return (
    <Suspense>
      <MaintenancePageWrapper />
    </Suspense>
  );
}
