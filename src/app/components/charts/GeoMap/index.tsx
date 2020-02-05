/* eslint-disable no-shadow */
/* eslint-disable @typescript-eslint/no-unused-vars */
// @ts-nocheck
import 'styled-components/macro';
import React from 'react';
import get from 'lodash/get';
import wc from 'which-country';
import Geocoder from 'react-mapbox-gl-geocoder';
import ReactMapGL, {
  Source,
  Layer,
  LinearInterpolator,
  PointerEvent,
} from 'react-map-gl';
import { mockData } from 'app/components/charts/GeoMap/mock';
import { MapPin } from 'app/components/charts/GeoMap/common/MapPin';
import mapStyle from 'app/components/charts/GeoMap/common/style/style.json';
import mapStyle2 from 'app/components/charts/GeoMap/common/style/style2.json';
import geoJSON from 'app/components/charts/GeoMap/common/style/geojson.json';
import { LocationModel } from 'app/modules/report/model';
import { countries } from 'app/assets/data/countries';
import find from 'lodash/find';
import { Input } from 'app/components/inputs/textfields/PasswordTextField';
import { ProjectPalette } from 'app/theme';
import { MapGeoCoderInputListItem } from './common/MapGeoCoderInputListItem';

type Props = {
  width?: number;
  height?: number;
  noData?: boolean;
  pointSelection?: LocationModel | null;
  setPointSelection?: Function;
};

export function GeoMap(props: Props) {
  const [maxPinValue, setMaxPinValue] = React.useState(
    Math.max(...mockData.mapMarkers.map(m => m.value))
  );
  const containerRef: React.RefObject<HTMLDivElement> = React.createRef();
  const [viewport, setViewport] = React.useState({
    width: props.width || 400,
    height: props.height || 557,
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

  React.useEffect(() => {
    if (!props.pointSelection) {
      setViewport(prev => ({ ...prev, latitude: 13, longitude: 25, zoom: 1 }));
    }
  }, [props.pointSelection]);

  function onGeoCoderSelected(viewport: any, item: any) {
    setViewport(prev => ({ ...prev, ...viewport }));
    if (props.setPointSelection) {
      const iso3 = wc([
        item.geometry.coordinates[0],
        item.geometry.coordinates[1],
      ]);
      let country = null;
      if (iso3) {
        country = find(countries, { iso3 });
      }
      props.setPointSelection({
        longitude: item.geometry.coordinates[0],
        latitude: item.geometry.coordinates[1],
        country: country || { label: '', value: '' },
        place: item.place_name,
      });
    }
  }

  function onMapClick(e: PointerEvent) {
    if (props.setPointSelection) {
      const iso3 = wc([e.lngLat[0], e.lngLat[1]]);
      let country = null;
      if (iso3) {
        country = find(countries, { iso3 });
      }
      props.setPointSelection({
        longitude: e.lngLat[0],
        latitude: e.lngLat[1],
        country: country || { label: '', value: '' },
      });
    }
    setViewport(prev => ({
      ...prev,
      zoom: prev.zoom > 10 ? prev.zoom : 10,
      longitude: e.lngLat[0],
      latitude: e.lngLat[1],
      transitionInterpolator: new LinearInterpolator(),
      transitionDuration: 1000,
    }));
  }

  return (
    <div
      css={`
        width: 100%;
      `}
      ref={containerRef}
    >
      {props.noData && (
        <Geocoder
          css={`
            position: relative;

            > div {
              width: 100%;
              margin: 5px 0 12px 0;
            }

            .react-geocoder-results {
              margin: 0;
              z-index: 9999;
              position: absolute;
              background: ${ProjectPalette.common.white};
              box-shadow: 0 6px 13px 0 rgba(21, 33, 56, 0.53);
            }
          `}
          viewport={viewport}
          inputComponent={Input}
          onSelected={onGeoCoderSelected}
          itemComponent={MapGeoCoderInputListItem}
          mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        />
      )}
      <ReactMapGL
        {...viewport}
        onViewportChange={setViewport}
        mapStyle={props.noData ? mapStyle2 : mapStyle}
        onClick={props.noData ? onMapClick : undefined}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
      >
        {!props.noData && (
          <>
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
          </>
        )}
        {props.noData && props.pointSelection && (
          <MapPin
            value={1}
            maxValue={1}
            key="point-selection"
            name="point-selection"
            latitude={get(props.pointSelection, 'latitude', 0)}
            longitude={get(props.pointSelection, 'longitude', 0)}
          />
        )}
      </ReactMapGL>
    </div>
  );
}
