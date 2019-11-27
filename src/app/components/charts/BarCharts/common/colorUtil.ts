import { ProjectPalette } from 'app/theme';

export type ColorSchemeType = 'single' | 'multi';

export const colorScheme = (colors: string | undefined) => {
  if (colors === 'multi') {
    return [
      ProjectPalette.primary.main,
      ProjectPalette.primary.dark,
      ProjectPalette.primary.light,
      ProjectPalette.secondary.main,
      ProjectPalette.secondary.dark,
    ];
  }
  return ProjectPalette.primary.main;
};
