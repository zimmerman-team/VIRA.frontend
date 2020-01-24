export function getNavTabItems(mockItems: any, replaceParam: any) {
  return {
    items: mockItems.items.map((item: any) => ({
      label: item.label,
      path: item.path.replace('/-', `/${replaceParam}`),
    })),
  };
}
