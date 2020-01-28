/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
// @ts-nocheck
import React from 'react';
import find from 'lodash/find';
import { Close } from '@material-ui/icons';
import styled from 'styled-components/macro';
import { ResponsiveBubbleHtml } from '@nivo/circle-packing';
import { Grid, Typography, IconButton } from '@material-ui/core';

type Props = {
  data: object;
  selectedBubble: string;
  setSelectedBubble: Function;
};

const ChartContainer = styled.div`
  height: 600px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

export function BubbleChart(props: Props) {
  const detailContainerRef = React.createRef();

  React.useEffect(() => {
    if (props.selectedBubble !== '') {
      detailContainerRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
        inline: 'start',
      });
    }
  }, [props.selectedBubble]);

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
                }}
                css={`
                  opacity: ${node.id === props.selectedBubble ||
                  props.selectedBubble === ''
                    ? 1
                    : 0.5};
                  &:hover {
                    opacity: 1;
                    cursor: pointer;
                  }
                `}
                {...handlers}
                onClick={_e =>
                  props.setSelectedBubble(
                    node.id === props.selectedBubble ? '' : node.id
                  )
                }
              />
            );
          }}
          tooltip={tProps => <div>{tProps.id}</div>}
          colors={props.data.children.map(item => item.color)}
          margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
        />
      </ChartContainer>
      {props.selectedBubble !== '' && (
        <Grid container spacing={6}>
          <Grid
            item
            xs={12}
            css={`
              display: flex;
              align-items: center;
              justify-content: space-between;
            `}
            ref={detailContainerRef}
          >
            <Typography variant="h6">{props.selectedBubble}</Typography>
            <IconButton onClick={() => props.setSelectedBubble('')}>
              <Close />
            </IconButton>
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
