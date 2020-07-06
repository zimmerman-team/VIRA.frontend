import get from 'lodash/get';
import find from 'lodash/find';
import filter from 'lodash/filter';
import orderBy from 'lodash/orderBy';

export function formatTeamCards(
  init: boolean,
  data: any,
  sort: string,
  page: number,
  pageSize: number,
  search: string,
  allUsers: any
) {
  let allData = data;
  let newData = data;
  if (init) {
    allData = (data || []).map((item: any) => {
      const splits = item.description.split(',');
      const creator = find(allUsers, { user_id: splits[1] });
      return {
        _id: item._id,
        title: item.label,
        description: `Created by: ${get(creator, 'name', '')}`,
        dateCreated: item.date.replace(/\//g, '.'),
      };
    });
    newData = allData;
  }

  /* todo: duplicate code in formatUserCards.ts */
  // do search
  if (search !== '') {
    newData = filter(
      newData,
      (item: any) =>
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
