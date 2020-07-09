export function getNavTabItems(navItems: any, replaceParam: any) {
  return {
    items: navItems.map((item: any) => ({
      label: item.label,
      path: item.path.replace('/-', `/${replaceParam}`),
    })),
  };
}
