export function getTitle(index: number): string {
  switch (index) {
    case 0:
      return 'home.chart_nav.pillars';
    case 1:
      return 'home.chart_nav.priority_area';
    case 2:
      return 'home.chart_nav.target_group';
    case 3:
      return 'home.chart_nav.one_year_and_multi_year';
    case 4:
      return 'home.chart_nav.sdg';
    case 5:
      return 'home.chart_nav.map';
    default:
      return 'home.chart_nav.priority_area';
  }
}

export function getTitleDesc(index: number): string {
  switch (index) {
    case 0:
      return 'home.chart_description.pillars';
    case 1:
      return 'home.chart_description.priority_area';
    case 2:
      return '';
    case 3:
      return '';
    case 4:
      return 'home.chart_description.sdg';
    case 5:
      return 'home.chart_description.map';
    default:
      return 'home.chart_description.priority_area';
  }
}
