export function getTitle(index: number): string {
  switch (index) {
    case 0:
      return 'home.chart_nav.priority_area';
    case 1:
      return 'home.chart_nav.sdg';
    case 2:
      return 'home.chart_nav.map';
    default:
      return 'home.chart_nav.priority_area';
  }
}
