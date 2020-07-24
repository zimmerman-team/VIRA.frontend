// const arr: Date[] = [ ];
//
// allProjectsData.data.map(project => {
//   arr.push(project.decision_date_unix)
// });

export default function getEarliestDate(dateArray: Date[]) {
  const earliest: Date = dateArray.reduce(function(
    previous: Date,
    current: Date
  ) {
    return previous > current ? current : previous;
  });

  return earliest;
}
