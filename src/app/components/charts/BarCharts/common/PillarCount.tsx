import React from 'react';
import { useTranslation } from 'react-i18next';

interface PillarItemProps {
  name: string;
  count: string;
}

interface PillarInfoProps {
  items?: PillarItemProps[];
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
    name: 'Churches & Organs',
    count: '13',
  },
  {
    name: 'Social good',
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
    name: 'People reachout of People targeted',
    count: '746/893',
  },
];

export const PillarCountItem = (props: PillarItemProps) => {
  const { t, i18n } = useTranslation();

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

export const PillarCountContainer = (props: PillarInfoProps) => {
  return (
    <div
      css={`
        display: flex;
        width: 60%;
        margin-bottom: 50px;
      `}
    >
      {PillarInfoData.map((item: PillarItemProps) => (
        <React.Fragment key={item.name}>
          <PillarCountItem name={item.name} count={item.count} />
          <PillarCountDivider />
        </React.Fragment>
      ))}
    </div>
  );
};
