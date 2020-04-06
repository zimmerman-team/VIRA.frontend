import { ProjectPalette } from 'app/theme';
import { HorizontalBarChartModel } from 'app/components/charts/BarCharts/HorizontalBarChart/model';

export const mockData: HorizontalBarChartModel = {
  values: [
    {
      name: 'Poverty reduction with a focus on youth and children',
      value1: 400,
      value2: 1000 - 400,
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
      value2: 500 - 400,
      value3: 40000,
      value1Color: ProjectPalette.primary.main,
      value2Color: ProjectPalette.grey[500],
      tooltip: {
        title: 'Refugees',
        items: [
          {
            label: `Target (${((400 / 500) * 100).toFixed(2)}%)`,
            value: 500,
            percentage: ((400 / 500) * 100).toFixed(2),
          },
          {
            label: 'Budget',
            value: 400000,
          },
        ],
      },
    },
    {
      name: 'The elderly',
      value1: 700,
      value2: 1100 - 700,
      value3: 50000,
      value1Color: ProjectPalette.primary.main,
      value2Color: ProjectPalette.grey[500],
      tooltip: {
        title: 'The elderly',
        items: [
          {
            label: `Target (${((700 / 1100) * 100).toFixed(2)}%)`,
            value: 1100,
            percentage: ((700 / 1100) * 100).toFixed(2),
          },
          {
            label: 'Budget',
            value: 500000,
          },
        ],
      },
    },
    {
      name: 'Prisoner rehabilitation',
      value1: 300,
      value2: 600 - 300,
      value3: 25000,
      value1Color: ProjectPalette.primary.main,
      value2Color: ProjectPalette.grey[500],
      tooltip: {
        title: 'Prisoner rehabilitation',
        items: [
          {
            label: `Target (${((300 / 600) * 100).toFixed(2)}%)`,
            value: 600,
            percentage: ((300 / 600) * 100).toFixed(2),
          },
          {
            label: 'Budget',
            value: 250000,
          },
        ],
      },
    },
    {
      name: 'Drug use',
      value1: 400,
      value2: 1000 - 400,
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
      value1: 300,
      value2: 1000 - 300,
      value3: 74000,
      value1Color: ProjectPalette.primary.main,
      value2Color: ProjectPalette.grey[500],
      tooltip: {
        title: 'Prostitution',
        items: [
          {
            label: `Target (${((300 / 1000) * 100).toFixed(2)}%)`,
            value: 1000,
            percentage: ((300 / 1000) * 100).toFixed(2),
          },
          {
            label: 'Budget',
            value: 740000,
          },
        ],
      },
    },
    {
      name: 'Homelessness',
      value1: 800,
      value2: (700 - 800) * -1,
      value3: 15000,
      value1Color: ProjectPalette.primary.main,
      value2Color: '#05c985',
      tooltip: {
        title: 'Homelessness',
        items: [
          {
            label: `Target (${((800 / 700) * 100).toFixed(2)}%)`,
            value: 700,
            percentage: ((800 / 700) * 100).toFixed(2),
          },
          {
            label: 'Budget',
            value: 150000,
          },
        ],
      },
    },
  ],
  colors: [ProjectPalette.primary.main, ProjectPalette.grey[500], '#05c985'],
};
