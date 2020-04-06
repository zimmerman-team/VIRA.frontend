import { ProjectPalette } from 'app/theme';

export type ColorSchemeType = 'single' | 'multi' | string[];

export const colorScheme = (colors: string | string[] | undefined) => {
  if (colors === 'multi') {
    return [
      ProjectPalette.primary.main,
      ProjectPalette.primary.dark,
      ProjectPalette.primary.light,
      ProjectPalette.secondary.main,
      ProjectPalette.secondary.dark,
    ];
  }
  if (Array.isArray(colors)) {
    return colors;
  }
  return ProjectPalette.primary.main;
};
