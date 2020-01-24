// @ts-nocheck
import React from 'react';
import find from 'lodash/find';
import styled from 'styled-components/macro';
import { Grid, Typography } from '@material-ui/core';
import { ResponsiveBubbleHtml } from '@nivo/circle-packing';

type Props = {
  data: object;
  selectedBubble: string;
  setSelectedBubble: Function;
};

const ChartContainer = styled.div`
  display: flex;
  height: 600px;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

export function BubbleChart(props: Props) {
  return (
    <React.Fragment>
      <ChartContainer>
        <ResponsiveBubbleHtml
          leavesOnly
          value="loc"
          padding={40}
          identity="name"
          root={props.data}
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
                  width: style.r * 2,
                  height: style.r * 2,
                  borderRadius: style.r,
                  opacity:
                    node.id === props.selectedBubble ||
                    props.selectedBubble === ''
                      ? 1
                      : 0.5,
                }}
                // {...handlers}
                onMouseEnter={e => props.setSelectedBubble(node.id)}
                onMouseLeave={e => props.setSelectedBubble('')}
              />
            );
          }}
          colors={props.data.children.map(item => item.color)}
          margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
        />
      </ChartContainer>
      {props.selectedBubble !== '' && (
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <Typography variant="h6">{props.selectedBubble}</Typography>
          </Grid>
          {find(props.data.children, {
            name: props.selectedBubble,
          }).priorityAreas.map(item => (
            <Grid item>
              {item.name}
              <span
                css={`
                  opacity: 0.5;
                  margin-left: 10px;
                `}
              >
                {item.value}
              </span>
            </Grid>
          ))}
        </Grid>
      )}
    </React.Fragment>
  );
}
