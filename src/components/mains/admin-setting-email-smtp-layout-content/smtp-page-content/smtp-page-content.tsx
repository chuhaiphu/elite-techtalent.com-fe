import { getSmtpAction } from '@/actions/smtp-action';
import { getMeAction } from '@/actions/auth-action';
import { redirect } from 'next/navigation';
import SmtpPageContentContainer from './smtp-page-content-container/smtp-page-content-container';

export default async function SmtpPageContent() {
  const response = await getSmtpAction();
  const smtp = response.data ?? null;
  const meResult = await getMeAction();

  if (!meResult.success || !meResult.data) {
    redirect('/login');
  }

  return <SmtpPageContentContainer smtp={smtp} userData={meResult.data} />;
}
