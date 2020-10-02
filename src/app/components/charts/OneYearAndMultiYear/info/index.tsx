import React from 'react';
// import { useTranslation } from 'react-i18next';

interface OneYearAndMultiYearItemProps {
  name: string;
  count: string;
}

interface OneYearAndMultiYearInfoProps {
  items?: OneYearAndMultiYearItemProps[];
}

export const OneYearAndMultiYearCountDivider = () => (
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

export const OneYearAndMultiYearInfoData: OneYearAndMultiYearItemProps[] = [
  {
    name: 'Pillar 2: Cultural heritage',
    count: '13',
  },
  {
    name: 'Pillar 1: Social good',
    count: '67',
  },
  {
    name: 'Budget Spent Pillar 1',
    count: '250000',
  },
  {
    name: 'Budget Spent Pillar 2',
    count: '650000',
  },
  {
    name: 'Total people reached out of total targeted',
    count: '746/893',
  },
];

export const OneYearAndMultiYearCountItem = (
  props: OneYearAndMultiYearItemProps
) => {
  // const { t, i18n } = useTranslation();

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
        `}
      >
        {props.name}
      </div>
    </div>
  );
};

export const OneYearAndMultiYearCountContainer = (
  props: OneYearAndMultiYearInfoProps
) => {
  return (
    <div
      css={`
        display: flex;
        width: 60%;
        margin-bottom: 50px;
      `}
    >
      {OneYearAndMultiYearInfoData.map((item: OneYearAndMultiYearItemProps) => (
        <React.Fragment key={item.name}>
          <OneYearAndMultiYearCountItem name={item.name} count={item.count} />
          <OneYearAndMultiYearCountDivider />
        </React.Fragment>
      ))}
    </div>
  );
};
