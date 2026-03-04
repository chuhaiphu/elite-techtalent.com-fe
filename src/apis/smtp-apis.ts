import { ISmtpResponse, IUpdateSmtp } from '@/interfaces/smtp-interface';
import { api } from './_base';

export async function getSmtpApi() {
  return api<ISmtpResponse>('/smtp/admin', {
    method: 'GET',
  });
}

export async function updateSmtpApi(data: IUpdateSmtp) {
  return api<ISmtpResponse>('/smtp/admin', {
    method: 'PUT',
    body: JSON.stringify(data),
  });
}

export async function testSmtpEmailApi(email: string) {
  return api<{ success: boolean }>('/smtp/admin/test', {
    method: 'POST',
    body: JSON.stringify({ email }),
  });
}
