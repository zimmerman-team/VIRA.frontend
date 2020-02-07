/* eslint-disable no-shadow */
/* eslint-disable @typescript-eslint/no-unused-vars */
// @ts-nocheck
import 'styled-components/macro';
import React from 'react';
import get from 'lodash/get';
import find from 'lodash/find';
import wc from 'which-country';
import Geocoder from 'react-mapbox-gl-geocoder';
import ReactMapGL, {
  Source,
  Layer,
  LinearInterpolator,
  PointerEvent,
  InteractiveMap,
} from 'react-map-gl';
import { MapPin } from 'app/components/charts/GeoMap/common/MapPin';
import mapStyle from 'app/components/charts/GeoMap/common/style/style.json';
import mapStyle2 from 'app/components/charts/GeoMap/common/style/style2.json';
import geoJSON from 'app/components/charts/GeoMap/common/style/geojson.json';
import { LocationModel } from 'app/modules/report/model';
import { countries } from 'app/assets/data/countries';
import { Input } from 'app/components/inputs/textfields/PasswordTextField';
import { ProjectPalette } from 'app/theme';
import { MapGeoCoderInputListItem } from './common/MapGeoCoderInputListItem';
import Cluster from './common/MapCluster';
import { ClusterElement } from './common/MapCluster/ClusterElement';
import { MapControls } from './common/MapControls';
import { getRandomKey } from 'app/utils/getRandomKey';

type Props = {
  data?: any;
  width?: number;
  height?: number;
  noData?: boolean;
  pointSelection?: LocationModel | null;
  setPointSelection?: Function;
};

export function GeoMap(props: Props) {
  const mapRef: React.RefObject<InteractiveMap> = React.useRef(null);
  const [maxPinValue, setMaxPinValue] = React.useState(
    Math.max(...get(props.data, 'mapMarkers', []).map((m: any) => m.value))
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

  React.useEffect(
    () =>
      setMaxPinValue(
        Math.max(...get(props.data, 'mapMarkers', []).map((m: any) => m.value))
      ),
    [get(props.data, 'mapMarkers', [])]
  );

  // function onMapPinClick(coordinates: number[]) {
  //   if (coordinates.length === 2) {
  //     setViewport(prev => ({
  //       ...prev,
  //       zoom: 4,
  //       longitude: coordinates[0],
  //       latitude: coordinates[1],
  //       transitionInterpolator: new LinearInterpolator(),
  //       transitionDuration: 1000,
  //     }));
  //   }
  // }

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

  function handleClusterClick(
    zoom: number,
    longitude: number,
    latitude: number
  ) {
    setViewport((prev: any) => ({
      ...prev,
      zoom,
      longitude,
      latitude,
      transitionInterpolator: new LinearInterpolator(),
      transitionDuration: 1000,
    }));
  }

  function handleZoomIn() {
    setViewport(prev => ({
      ...prev,
      zoom: prev.zoom + 0.5,
      transitionInterpolator: new LinearInterpolator(),
      transitionDuration: 500,
    }));
  }

  function handleZoomOut() {
    if (viewport.zoom - 0.5 >= viewport.minZoom) {
      setViewport(prev => ({
        ...prev,
        zoom: prev.zoom - 0.5,
        transitionInterpolator: new LinearInterpolator(),
        transitionDuration: 500,
      }));
    }
  }

  return (
    <div
      css={`
        width: 100%;
        position: relative;
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
        ref={mapRef}
        {...viewport}
        onViewportChange={setViewport}
        mapStyle={props.noData ? mapStyle2 : mapStyle}
        onClick={props.noData ? onMapClick : undefined}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
      >
        {!props.noData && props.data && (
          <>
            {props.data.countryFeatures && (
              <Source
                type="geojson"
                data={
                  props.data.countryFeatures as
                    | GeoJSON.Feature<GeoJSON.Geometry>
                    | GeoJSON.FeatureCollection<GeoJSON.Geometry>
                    | string
                }
              >
                <Layer {...geoJSON} />
              </Source>
            )}
            {mapRef.current && (
              <Cluster
                map={mapRef.current.getMap()}
                radius={15}
                extent={512}
                nodeSize={22}
                minZoom={viewport.minZoom}
                element={(clusterProps: any) => (
                  <ClusterElement
                    {...clusterProps}
                    onClick={handleClusterClick}
                  />
                )}
              >
                {(props.data.mapMarkers || []).map((m: any) => (
                  <MapPin
                    key={getRandomKey()}
                    name={m.name}
                    value={m.value}
                    latitude={m.latitude}
                    maxValue={maxPinValue}
                    longitude={m.longitude}
                    // onClick={onMapPinClick}
                  />
                ))}
              </Cluster>
            )}
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
      <MapControls zoomIn={handleZoomIn} zoomOut={handleZoomOut} />
    </div>
  );
}
