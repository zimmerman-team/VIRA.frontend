/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
// @ts-nocheck
import React from 'react';
import find from 'lodash/find';
import minBy from 'lodash/minBy';
import { Grid } from '@material-ui/core';
import styled from 'styled-components/macro';
import { ResponsiveBubbleHtml } from '@nivo/circle-packing';
import { ProjectPalette } from 'app/theme';
import { LegendList } from './common/LegendList';
import { BubbleInfoBlock } from './common/BubbleInfoBlock';
import { otherSdgs } from './mock';

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

export function BubbleChart(props: Props) {
  const [minValue, setMinValue] = React.useState(0);
  const [selectedBubbleObj, setSelectedBubbleObj] = React.useState(null);
  const contRef = React.useRef();

  React.useEffect(() => {
    if (props.data.children) {
      setMinValue(minBy(props.data.children, 'loc').loc);
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

  // console.log(contRef.current ? contRef.current.getBoundingClientRect() : '');

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} lg={3}>
        <LegendList items={[...props.data.children, ...otherSdgs]} />
      </Grid>
      <Grid item xs={12} lg={9}>
        <ChartContainer ref={contRef}>
          <ResponsiveBubbleHtml
            leavesOnly
            value="loc"
            padding={60}
            identity="name"
            root={{
              ...props.data,
              children: [
                ...props.data.children,
                ...otherSdgs.map(os => ({ ...os, loc: minValue })),
              ],
            }}
            isZoomable={false}
            enableLabel={false}
            colorBy={v => v.color}
            nodeComponent={({ node, style, handlers }) => {
              if (style.r <= 0) return null;
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
                    background: node.color,
                    top: style.y - style.r,
                    left: style.x - style.r,
                    width: style.r * 2.3,
                    height: style.r * 2.3,
                    borderRadius: '50%',
                    opacity: node.data.opacity || 1,
                    color: ProjectPalette.common.white,
                    cursor:
                      node.data.opacity === undefined ? 'pointer' : 'initial',
                  }}
                  {...handlers}
                  onClick={_e =>
                    node.data.opacity === undefined &&
                    props.setSelectedBubble(node.id)
                  }
                >
                  <svg
                    css={`
                      width: 70%;
                    `}
                    viewBox="0 0 56 18"
                  >
                    <text
                      x="50%"
                      y="50%"
                      textAnchor="middle"
                      dominantBaseline="middle"
                      fill={ProjectPalette.common.white}
                    >
                      SDG {node.data.number}
                    </text>
                  </svg>
                </div>
              );
            }}
            tooltip={tProps => <div>{tProps.id}</div>}
            colors={props.data.children.map(item => item.color)}
            margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
          />
        </ChartContainer>
        {selectedBubbleObj && (
          <BubbleInfoBlock
            name={selectedBubbleObj.ppName}
            targetValue={selectedBubbleObj.targetValue}
            budgetValue={selectedBubbleObj.loc}
            targetPercentage={selectedBubbleObj.targetPercentage}
            budgetPercentage={0}
          />
        )}
      </Grid>
    </Grid>
  );
}
