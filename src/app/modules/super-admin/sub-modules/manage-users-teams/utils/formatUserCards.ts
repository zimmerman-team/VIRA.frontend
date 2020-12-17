import get from 'lodash/get';
import filter from 'lodash/filter';
import orderBy from 'lodash/orderBy';
import {
  NewDataItemModel,
  AllDataItemModel,
} from 'app/modules/super-admin/sub-modules/manage-users-teams/models';

export function formatUserCards(
  init: boolean,
  data: any,
  sort: string,
  page: number,
  pageSize: number,
  search: string
) {
  let allData = data;
  let newData = data;
  if (init) {
    allData = (data || []).map((item: AllDataItemModel) => {
      const title = item.user_metadata
        ? `${item.user_metadata.firstName} ${item.user_metadata.lastName}`
        : item.name;
      let role = item.app_metadata
        ? get(item.app_metadata, 'authorization.roles[0]', '-')
        : '-';
      role = role.name || role;
      return {
        _id: item.user_id,
        title,
        description: role,
        dateCreated: item.created_at
          .slice(0, 10)
          .split('-')
          .reverse()
          .join('.'),
      };
    });
    newData = allData;
  }

  // do search
  if (search !== '') {
    newData = filter(
      newData,
      (item: NewDataItemModel) =>
        item.title.toLowerCase().includes(search) ||
        item.description.toLowerCase().includes(search)
    );
  }

  // do sort
  if (sort !== '') {
    const direction = sort[0] === '-' ? 'desc' : 'asc';
    const orderValue = direction === 'desc' ? sort.slice(1) : sort;
    newData = orderBy(newData, [orderValue], [direction]);
  }

  // do paginate
  const sliceTo =
    pageSize * (page + 1) > newData.length
      ? newData.length
      : pageSize * (page + 1);
  const paginatedData = newData.slice(pageSize * page, sliceTo);

  return { allData, paginatedData };
}
