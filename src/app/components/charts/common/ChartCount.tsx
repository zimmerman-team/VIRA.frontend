import React from 'react';
import { useTranslation } from 'react-i18next';
// import { useTranslation } from 'react-i18next';

export interface ChartCountItemProps {
  name: string;
  count: string;
}

interface ChartCountInfoProps {
  items: ChartCountItemProps[];
}

export const ChartCountDivider = () => (
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

export const ChartCountInfoData: ChartCountItemProps[] = [
  {
    name: 'Churches & Organs',
    count: '13',
  },
  {
    name: 'Social good',
    count: '67',
  },
  {
    name: 'Budget Spent ChartCount 1',
    count: '250000',
  },
  {
    name: 'Budget Spent ChartCount 2',
    count: '650000',
  },
  {
    name: 'People reachout of People targeted',
    count: '746/893',
  },
];

export const ChartCountItem = (props: ChartCountItemProps) => {
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

export const ChartCountContainer = (props: ChartCountInfoProps) => {
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
      {props.items.map((item: ChartCountItemProps) => (
        <React.Fragment key={item.name}>
          <ChartCountItem name={item.name} count={item.count} />
          <ChartCountDivider />
        </React.Fragment>
      ))}
    </div>
  );
};
