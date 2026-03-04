import { IAppConfigResponse, IUpdateAppConfig } from "@/interfaces/app-config-interface";
import { api } from "./_base";

export async function getPublicAppConfigApi() {
  return api<IAppConfigResponse>('/app-config', {
    method: 'GET',
  });
}

export async function getAppConfigAdminApi() {
  return api<IAppConfigResponse>('/app-config/admin', {
    method: 'GET',
  });
}

export async function updateAppConfigApi(data: IUpdateAppConfig) {
  return api<IAppConfigResponse>('/app-config/admin', {
    method: 'PUT',
    body: JSON.stringify(data),
  });
}
