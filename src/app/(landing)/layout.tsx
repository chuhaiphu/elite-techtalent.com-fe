import { Suspense } from 'react';
import { MaintenanceGuard } from '@/components/guards/maintenance-guard';

export default async function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Suspense>
      <MaintenanceGuard>{children}</MaintenanceGuard>
    </Suspense>
  );
}
