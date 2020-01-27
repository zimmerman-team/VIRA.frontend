import 'styled-components/macro';
import React from 'react';
import get from 'lodash/get';
import ReactMapGL, { Source, Layer, LinearInterpolator } from 'react-map-gl';
import { mockData } from 'app/components/charts/GeoMap/mock';
import { MapPin } from 'app/components/charts/GeoMap/common/MapPin';
import mapStyle from 'app/components/charts/GeoMap/common/style/style.json';
import geoJSON from 'app/components/charts/GeoMap/common/style/geojson.json';

type Props = {};

export function GeoMap(props: Props) {
  const [maxPinValue, setMaxPinValue] = React.useState(
    Math.max(...mockData.mapMarkers.map(m => m.value))
  );
  const containerRef: React.RefObject<HTMLDivElement> = React.createRef();
  const [viewport, setViewport] = React.useState({
    width: 400,
    height: 557,
    latitude: 13,
    longitude: 25,
    zoom: 1,
    minZoom: 1,
  });

  React.useEffect(() => {
    setViewport(prev => ({
      ...prev,
      width: get(containerRef.current, 'offsetWidth', 0),
    }));
  }, [get(containerRef.current, 'offsetWidth', 0)]);

  function onMapPinClick(coordinates: number[]) {
    if (coordinates.length === 2) {
      setViewport(prev => ({
        ...prev,
        zoom: 4,
        longitude: coordinates[0],
        latitude: coordinates[1],
        transitionInterpolator: new LinearInterpolator(),
        transitionDuration: 1000,
      }));
    }
  }

  return (
    <div
      css={`
        width: 100%;
      `}
      ref={containerRef}
    >
      <ReactMapGL
        {...viewport}
        mapStyle={mapStyle}
        onViewportChange={setViewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
      >
        <Source
          type="geojson"
          data={
            mockData.countryFeatures as
              | GeoJSON.Feature<GeoJSON.Geometry>
              | GeoJSON.FeatureCollection<GeoJSON.Geometry>
              | string
          }
        >
          <Layer {...geoJSON} />
        </Source>
        {mockData.mapMarkers.map((m: any) => (
          <MapPin
            key={m.name}
            name={m.name}
            value={m.value}
            latitude={m.latitude}
            maxValue={maxPinValue}
            longitude={m.longitude}
            onClick={onMapPinClick}
          />
        ))}
      </ReactMapGL>
    </div>
  );
}
