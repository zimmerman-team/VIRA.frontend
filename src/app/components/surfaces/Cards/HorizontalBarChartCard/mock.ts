import { ProjectPalette } from 'app/theme';
import { HorizontalBarChartCardModel } from 'app/components/surfaces/Cards/HorizontalBarChartCard/model';

export const mockData: HorizontalBarChartCardModel = {
  title: 'Priority area',
  data: {
    values: [
      {
        name: 'Poverty reduction with a focus on youth and children',
        value1: 400,
        value2: 1000,
        value3: 90000,
        value1Color: ProjectPalette.primary.main,
        value2Color: ProjectPalette.grey[500],
        tooltip: {
          title: 'Poverty reduction with a focus on youth and children',
          items: [
            {
              label: `Target (${((900 / 1000) * 100).toFixed(2)}%)`,
              value: 1000,
              percentage: ((900 / 1000) * 100).toFixed(2),
            },
            {
              label: 'Budget',
              value: 900000,
            },
          ],
        },
      },
      {
        name: 'Refugees',
        value1: 400,
        value2: 1000,
        value3: 90000,
        value1Color: ProjectPalette.primary.main,
        value2Color: ProjectPalette.grey[500],
        tooltip: {
          title: 'Refugees',
          items: [
            {
              label: `Target (${((900 / 1000) * 100).toFixed(2)}%)`,
              value: 1000,
              percentage: ((900 / 1000) * 100).toFixed(2),
            },
            {
              label: 'Budget',
              value: 900000,
            },
          ],
        },
      },
      {
        name: 'The elderly',
        value1: 400,
        value2: 1000,
        value3: 90000,
        value1Color: ProjectPalette.primary.main,
        value2Color: ProjectPalette.grey[500],
        tooltip: {
          title: 'The elderly',
          items: [
            {
              label: `Target (${((900 / 1000) * 100).toFixed(2)}%)`,
              value: 1000,
              percentage: ((900 / 1000) * 100).toFixed(2),
            },
            {
              label: 'Budget',
              value: 900000,
            },
          ],
        },
      },
      {
        name: 'Prisoner rehabilitation',
        value1: 400,
        value2: 1000,
        value3: 90000,
        value1Color: ProjectPalette.primary.main,
        value2Color: ProjectPalette.grey[500],
        tooltip: {
          title: 'Prisoner rehabilitation',
          items: [
            {
              label: `Target (${((900 / 1000) * 100).toFixed(2)}%)`,
              value: 1000,
              percentage: ((900 / 1000) * 100).toFixed(2),
            },
            {
              label: 'Budget',
              value: 900000,
            },
          ],
        },
      },
      {
        name: 'Drug use',
        value1: 400,
        value2: 1000,
        value3: 90000,
        value1Color: ProjectPalette.primary.main,
        value2Color: ProjectPalette.grey[500],
        tooltip: {
          title: 'Drug use',
          items: [
            {
              label: `Target (${((900 / 1000) * 100).toFixed(2)}%)`,
              value: 1000,
              percentage: ((900 / 1000) * 100).toFixed(2),
            },
            {
              label: 'Budget',
              value: 900000,
            },
          ],
        },
      },
      {
        name: 'Prostitution',
        value1: 400,
        value2: 1000,
        value3: 90000,
        value1Color: ProjectPalette.primary.main,
        value2Color: ProjectPalette.grey[500],
        tooltip: {
          title: 'Prostitution',
          items: [
            {
              label: `Target (${((900 / 1000) * 100).toFixed(2)}%)`,
              value: 1000,
              percentage: ((900 / 1000) * 100).toFixed(2),
            },
            {
              label: 'Budget',
              value: 900000,
            },
          ],
        },
      },
      {
        name: 'Homelessness',
        value1: 400,
        value2: 1000,
        value3: 90000,
        value1Color: ProjectPalette.primary.main,
        value2Color: ProjectPalette.grey[500],
        tooltip: {
          title: 'Homelessness',
          items: [
            {
              label: `Target (${((900 / 1000) * 100).toFixed(2)}%)`,
              value: 1000,
              percentage: ((900 / 1000) * 100).toFixed(2),
            },
            {
              label: 'Budget',
              value: 900000,
            },
          ],
        },
      },
    ],
  },
};
