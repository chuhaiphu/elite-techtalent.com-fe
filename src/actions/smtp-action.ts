'use server';

import { revalidatePath } from 'next/cache';
import { ActionResponse } from '@/interfaces/_base-interface';
import {
  ISmtpResponse,
  ICreateSmtp,
  IUpdateSmtp,
} from '@/interfaces/smtp-interface';
import { executeApi } from '@/actions/_base';
import { getSmtpApi, updateSmtpApi, testSmtpEmailApi } from '@/apis/smtp-apis';

export async function getSmtpAction(): Promise<
  ActionResponse<ISmtpResponse | null>
> {
  const result = await executeApi(async () => getSmtpApi());
  return result as ActionResponse<ISmtpResponse | null>;
}

export async function saveSmtpAction(
  input: ICreateSmtp
): Promise<ActionResponse<ISmtpResponse>> {
  const result = await executeApi(async () => updateSmtpApi(input));
  revalidatePath('/admin/settings', 'page');
  return result;
}

export async function updateSmtpAction(
  id: string,
  input: IUpdateSmtp
): Promise<ActionResponse<ISmtpResponse>> {
  const result = await executeApi(async () => updateSmtpApi(input));
  revalidatePath('/admin/settings', 'page');
  return result;
}

export async function hasSmtpAction(): Promise<ActionResponse<boolean>> {
  const result = await executeApi(async () => getSmtpApi());
  return {
    success: result.success,
    data: result.success && result.data !== null,
    error: result.error,
  };
}

export async function sendTestEmailAction(
  email: string
): Promise<ActionResponse<void>> {
  const result = await executeApi(async () => testSmtpEmailApi(email));
  return {
    success: result.success && result.data?.success === true,
    error:
      result.error ||
      (result.data?.success === false ? 'Failed to send test email' : undefined),
  };
}
