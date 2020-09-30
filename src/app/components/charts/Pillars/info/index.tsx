import React from 'react';
import get from 'lodash/get';
import find from 'lodash/find';
import sumBy from 'lodash/sumBy';
import { useTranslation } from 'react-i18next';

interface PillarItemProps {
  name: string;
  count: string;
}

interface PillarInfoProps {
  data: any[];
  // items?: PillarItemProps[];
}

export const PillarCountDivider = () => (
  <div
    css={`
      height: 39px;
      width: 1px;
      background-color: #25baa4;
      margin-left: 22px;
      margin-right: 22px;
      flex-shrink: 0;
      &:last-child {
        display: none;
      }
    `}
  />
);

export const PillarInfoData: PillarItemProps[] = [
  {
    name: 'Pillar 1: Social good',
    count: '0',
  },
  {
    name: 'Pillar 2: Cultural heritage',
    count: '0',
  },
  {
    name: 'Budget Spent Pillar 1',
    count: '0',
  },
  {
    name: 'Budget Spent Pillar 2',
    count: '0',
  },
  {
    name: 'Total people reached out of total targeted',
    count: '0/0',
  },
];

function getItems(data: any[]) {
  const items = [...PillarInfoData];

  items[0].count = get(
    find(data, (item: any) => item.name === 'Pillar 1: Social good'),
    'count',
    0
  );
  items[2].count = get(
    find(data, (item: any) => item.name === 'Pillar 1: Social good'),
    'spent',
    0
  );
  items[1].count = get(
    find(data, (item: any) => item.name === 'Pillar 2: Cultural heritage'),
    'count',
    0
  );
  items[3].count = get(
    find(data, (item: any) => item.name === 'Pillar 2: Cultural heritage'),
    'spent',
    0
  );
  items[4].count = `${sumBy(data, 'reached')}/${sumBy(data, 'targeted')}`;

  items[0].name = 'reports.form.textfield.radio_pillar_one';
  items[1].name = 'reports.form.textfield.radio_pillar_two';
  return items;
}

export const PillarCountItem = (props: PillarItemProps) => {
  const { t } = useTranslation();
  return (
    <div
      css={`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        max-width: 150px;
      `}
    >
      <div
        css={`
          font-weight: 600;
          font-size: 24px;
          line-height: 24px;
          letter-spacing: 0.250795px;
          color: #155366;
          height: 44px;
          display: flex;
          justify-content: center;
          align-items: center;
          @media (max-width: 600px) {
            font-size: 16px;
          }
        `}
      >
        {props.count}
      </div>
      <div
        css={`
          font-weight: 600;
          font-size: 14px;
          line-height: 20px;
          letter-spacing: 0.250795px;
          color: #000000;
          text-align: center;
          @media (max-width: 600px) {
            font-size: 14px;
          }
        `}
      >
        {t(props.name)}
      </div>
    </div>
  );
};

export const PillarCountContainer = (props: PillarInfoProps) => {
  return (
    <div
      css={`
        width: 100%;
        display: flex;
        overflow: auto;
        margin-bottom: 50px;
        align-items: flex-start;
      `}
    >
      {getItems(props.data).map((item: PillarItemProps) => (
        <React.Fragment key={item.name}>
          <PillarCountItem name={item.name} count={item.count} />
          <PillarCountDivider />
        </React.Fragment>
      ))}
    </div>
  );
};
