import get from 'lodash/get';

export interface ItemModel {
  created_at: string;
  email: string;
  email_verified: boolean;
  identities: Identity[];
  name: string;
  nickname: string;
  picture: string;
  updated_at: string;
  user_id: string;
  user_metadata: UserMetadata;
  last_login?: string;
  last_ip?: string;
  logins_count?: number;
  app_metadata: AppMetadata;
  blocked?: boolean;
  family_name?: string;
  given_name?: string;
  last_password_reset?: string;
}

export interface Identity {
  user_id: string;
  provider: string;
  connection: string;
  isSocial: boolean;
}

export interface UserMetadata {
  firstName: string;
  lastName: string;
}

export interface AppMetadata {
  authorization: Authorization;
}

export interface Authorization {
  groups: any[];
  roles: any[];
}

export function formatUserTable(data: any) {
  return (data || []).map((item: ItemModel) => {
    const title = item.user_metadata
      ? `${item.user_metadata.firstName} ${item.user_metadata.lastName}`
      : item.name;
    const role = item.app_metadata
      ? get(item.app_metadata, 'authorization.roles[0]', '-')
      : '-';
    return [item.user_id, title, role.name || role, item.user_id];
  });
}
