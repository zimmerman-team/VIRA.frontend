/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/interactive-supports-focus */
import React from 'react';
import 'styled-components/macro';
import { Marker } from 'react-map-gl';
import { ProjectPalette } from 'app/theme';

const MAX_WIDTH = 15;

type Props = {
  name: string;
  value: number;
  latitude: number;
  maxValue: number;
  longitude: number;
  onClick?: Function;
};

function getWidth(value: number, maxValue: number) {
  return (((value * 100) / maxValue) * MAX_WIDTH) / 100;
}

export function MapPin(props: Props) {
  const width = getWidth(props.value, props.maxValue);
  return (
    <Marker
      captureDrag={false}
      captureScroll={false}
      key={`marker-${props.name}`}
      latitude={parseFloat(props.latitude.toString())}
      longitude={parseFloat(props.longitude.toString())}
    >
      <div
        role="button"
        onClick={() =>
          props.onClick && props.onClick([props.longitude, props.latitude])
        }
        css={`
          width: ${width}px;
          height: ${width}px;
          border-radius: 50%;
          background: ${ProjectPalette.common.white};
          border: ${width / 4}px solid ${ProjectPalette.secondary.main};
        `}
      />
    </Marker>
  );
}
