import get from 'lodash/get';

export function formatUserTable(data: any) {
  return (data || []).map((item: any) => {
    const title = item.user_metadata
      ? `${item.user_metadata.firstName} ${item.user_metadata.lastName}`
      : item.name;
    const role = item.app_metadata
      ? get(item.app_metadata, 'authorization.roles[0].name', '-')
      : '-';
    return [item.user_id, title, role, item.user_id];
  });
}
