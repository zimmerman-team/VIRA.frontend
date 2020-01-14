import filter from 'lodash/filter';
import orderBy from 'lodash/orderBy';

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
    allData = data.map((item: any) => ({
      _id: item.user_id,
      title: item.name,
      description: '',
      dateCreated: item.created_at.slice(0, 10),
    }));
    newData = allData;
  }

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
