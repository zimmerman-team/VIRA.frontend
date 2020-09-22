import React, { ReactText } from 'react';
import { ProjectPalette } from 'app/theme';
import styled from 'styled-components/macro';
import { useTranslation } from 'react-i18next';
import { Typography, Box } from '@material-ui/core';

const ContentContainer = styled.div`
  width: 382px;
  display: flex;
  padding: 24px;
  border-radius: 2px;
  flex-direction: column;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1);
  background: #242e42;
`;

const Divider = styled.div`
  width: 100%;
  height: 1px;
  opacity: 0.15;
  margin: 16px 0 18px 0;
  background: ${ProjectPalette.common.white};
`;

const Title = styled((props) => <Typography {...props} />)`
  && {
    color: ${ProjectPalette.common.white};
  }
`;

const Item = styled.div`
  display: flex;
  flex-direction: row;
`;

const Label = styled((props) => <Typography {...props} />)`
  && {
    margin-right: 28px;
    color: ${ProjectPalette.common.white};
  }
`;

const Value = styled((props) => <Typography {...props} />)`
  && {
    margin-left: auto;
    color: ${ProjectPalette.common.white};
  }
`;

export const ProgressBarContainer = styled.div`
  width: 100%;
  height: 4px;
  border-radius: 2px;
  margin-bottom: 2px;
  background: #2a465c;
`;

export const ProgressBar = styled.div`
  height: 4px;
  border-radius: 2px;
  background: ${ProjectPalette.secondary.main};
`;

export type ChartTooltipItemModel = {
  label: string | ReactText;
  value: number | string | ReactText;
  percentage?: number;
};

type ChartTooltipModel = {
  title: string | ReactText;
  items: ChartTooltipItemModel[];
};

export const ChartTooltip = (props: ChartTooltipModel) => {
  const { t } = useTranslation();
  return (
    <ContentContainer>
      <Title variant="subtitle2">{t(props.title as string)}</Title>
      <Divider />
      {props.items.map((item: ChartTooltipItemModel, index: number) => {
        // const label = (item.label as string).split(' ');
        return (
          <React.Fragment key={item.label}>
            <Item
              css={`
                margin-bottom: ${item.percentage ? '8px' : 0};
              `}
            >
              <Label variant="subtitle1">{item.label}</Label>
              <Value variant="subtitle1">{item.value}</Value>
            </Item>
            {item.percentage && (
              <ProgressBarContainer>
                <ProgressBar
                  css={`
                    width: ${item.percentage > 100 ? 100 : item.percentage}%;
                  `}
                />
              </ProgressBarContainer>
            )}
            {index !== props.items.length - 1 && (
              <Box height="17px" width="100%" />
            )}
          </React.Fragment>
        );
      })}
    </ContentContainer>
  );
};
