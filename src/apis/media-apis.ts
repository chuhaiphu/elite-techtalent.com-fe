import {
  ICreateMedia,
  IMediaResponse,
  IUpdateMedia,
} from '@/interfaces/media-interface';
import { api } from './_base';

export async function createMediaApi(data: ICreateMedia) {
  return api<IMediaResponse>('/media/admin', {
    method: 'POST',
    body: JSON.stringify(data),
  });
}

export async function getAllMediaApi(folder?: string) {
  const queryString = folder ? `?folder=${encodeURIComponent(folder)}` : '';
  return api<IMediaResponse[]>(`/media/admin${queryString}`, {
    method: 'GET',
  });
}

export async function getMediaFoldersApi() {
  return api<string[]>('/media/admin/folders', {
    method: 'GET',
  });
}

export async function getMediaByIdApi(id: string) {
  return api<IMediaResponse>(`/media/admin/${id}`, {
    method: 'GET',
  });
}

export async function updateMediaApi(id: string, data: IUpdateMedia) {
  return api<IMediaResponse>(`/media/admin/${id}`, {
    method: 'PUT',
    body: JSON.stringify(data),
  });
}

export async function deleteMediaApi(id: string) {
  return api<void>(`/media/admin/${id}`, {
    method: 'DELETE',
  });
}
