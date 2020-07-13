export interface NavItemsModel {
  label: string;
  path: string;
}

export function getNavTabItems(navItems: NavItemsModel[], replaceParam: any) {
  return {
    items: navItems.map((item: NavItemsModel) => ({
      label: item.label,
      path: item.path.replace('/-', `/${replaceParam}`),
    })),
  };
}
