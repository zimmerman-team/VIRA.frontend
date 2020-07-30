/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
// @ts-nocheck
import React from 'react';
import get from 'lodash/get';
import find from 'lodash/find';
import minBy from 'lodash/minBy';
import { ProjectPalette } from 'app/theme';
import styled from 'styled-components/macro';
import { ResponsiveBubbleHtml } from '@nivo/circle-packing';
import { Grid, Card as MuiCard, useMediaQuery } from '@material-ui/core';
import CardContent from '@material-ui/core/CardContent';
import { LegendList } from './common/LegendList';
import { BubbleInfoBlock } from './common/BubbleInfoBlock';
import { otherSdgs } from './mock';
import { ChartTooltip } from '../BarCharts/common/ChartTooltip';
import { hexToRgb } from 'app/utils/hexToRgb';

type Props = {
  data: object;
  selectedBubble: string;
  setSelectedBubble: Function;
};

const ChartContainer = styled.div`
  height: 475px;
  display: flex;
  margin-bottom: 12px;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

const Card = styled(props => <MuiCard {...props} />)`
  && {
    box-shadow: 0 0 2px 1px rgba(130, 136, 148, 0.08);
  }
`;

const Content = styled(props => <CardContent {...props} />)`
  display: flex;
  flex-direction: column;
  && {
    padding: 24px 0px 8px 24px !important;
    @media (max-width: 600px) {
      padding: 0 !important;
    }
  }
`;

export function BubbleChart(props: Props) {
  const isMobileWidth = useMediaQuery('(max-width: 600px)');
  const [minValue, setMinValue] = React.useState(0);
  const [selectedBubbleObj, setSelectedBubbleObj] = React.useState(null);
  const contRef = React.useRef();

  React.useEffect(() => {
    if (props.data.children) {
      const newMinValue = get(minBy(props.data.children, 'loc'), 'loc', 0);
      setMinValue(newMinValue === 0 ? 1 : newMinValue);
    }
  }, [props.data]);

  React.useEffect(() => {
    if (props.selectedBubble) {
      setSelectedBubbleObj(
        find(props.data.children, { name: props.selectedBubble })
      );
    } else {
      setSelectedBubbleObj(null);
    }
  }, [props.selectedBubble]);

  return (
    <Card>
      <Content>
        <Grid container spacing={isMobileWidth ? 0 : 3}>
          {!isMobileWidth && (
            <Grid item xs={false} sm={false} lg={3}>
              <LegendList
                activeBubble={props.selectedBubble}
                setActiveBubble={props.setSelectedBubble}
                items={[...props.data.children, ...otherSdgs]}
              />
            </Grid>
          )}
          <Grid item xs={12} sm={12} lg={9}>
            <ChartContainer
              ref={contRef}
              css={`
                height: ${isMobileWidth ? '375px' : '475px'};
              `}
            >
              <ResponsiveBubbleHtml
                leavesOnly
                value="loc"
                padding={isMobileWidth ? 50 : 60}
                identity="name"
                root={{
                  ...props.data,
                  children: [
                    ...props.data.children.map(child => ({
                      ...child,
                      loc: child.loc > 0 ? child.loc : minValue,
                    })),
                    ...otherSdgs.map(os => ({ ...os, loc: minValue })),
                  ],
                }}
                isZoomable={false}
                enableLabel={false}
                colorBy={v => v.color}
                nodeComponent={({ node, style, handlers }) => {
                  if (style.r <= 0) return null;
                  const hasData = !node.data.opacity || node.data.opacity === 1;
                  const rgbColor = hexToRgb(node.color);
                  return (
                    <div
                      id={(node.data && node.data.id
                        ? node.data.id
                        : node.id
                      ).replace(/[^\w]/gi, '-')}
                      style={{
                        position: 'absolute',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        background: `rgba(${rgbColor?.r}, ${rgbColor?.g}, ${
                          rgbColor?.b
                        }, ${node.data.opacity || 1})`,
                        top: style.y - style.r,
                        left: style.x - style.r,
                        width: style.r * (isMobileWidth ? 3 : 2.3),
                        height: style.r * (isMobileWidth ? 3 : 2.3),
                        borderRadius: '50%',
                        // opacity: node.data.opacity || 1,
                        color: ProjectPalette.common.white,
                        cursor: hasData ? 'pointer' : 'initial',
                        fontWeight: 700,
                        fontSize: (style.r * (isMobileWidth ? 3 : 2.3)) / 5,
                        border:
                          selectedBubbleObj &&
                          selectedBubbleObj.number === node.data.number
                            ? `3px solid ${ProjectPalette.secondary.main}`
                            : '',
                      }}
                      {...handlers}
                      onClick={_e =>
                        hasData && props.setSelectedBubble(node.id)
                      }
                    >
                      SDG {node.data.number}
                    </div>
                  );
                }}
                tooltip={tProps => {
                  if (tProps.data.opacity === 0.2 || isMobileWidth) {
                    return null;
                  }
                  return (
                    <ChartTooltip
                      title={tProps.id}
                      items={[
                        {
                          label: `Target (${tProps.data.targetPercentage.toFixed(
                            2
                          )}%)`,
                          value: tProps.data.targetValue,
                          percentage: tProps.data.targetPercentage,
                        },
                        {
                          label: 'Budget',
                          value:
                            tProps.data.loc &&
                            tProps.data.loc
                              .toLocaleString(undefined, {
                                currency: 'EUR',
                                currencyDisplay: 'symbol',
                                style: 'currency',
                              })
                              .replace('.00', ''),
                        },
                        {
                          label: 'charts.barchart.commitment',
                          value: tProps.data.insContribution
                            ? tProps.data.insContribution.toLocaleString(
                                undefined,
                                {
                                  currency: 'EUR',
                                  currencyDisplay: 'symbol',
                                  style: 'currency',
                                }
                              )
                            : '0',
                        },
                      ]}
                    />
                  );
                }}
                colors={props.data.children.map(item => item.color)}
                margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
                theme={{
                  tooltip: {
                    container: {
                      padding: 0,
                    },
                    basic: {
                      padding: 0,
                    },
                  },
                }}
              />
            </ChartContainer>
            {selectedBubbleObj && (
              <BubbleInfoBlock
                name={selectedBubbleObj.name}
                isMobileWidth={isMobileWidth}
                targetValue={selectedBubbleObj.targetValue}
                budgetValue={selectedBubbleObj.loc}
                targetPercentage={selectedBubbleObj.targetPercentage}
                budgetPercentage={0}
                insContribution={selectedBubbleObj.insContribution}
              />
            )}
          </Grid>
        </Grid>
      </Content>
    </Card>
  );
}
