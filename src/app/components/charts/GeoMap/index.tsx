/* eslint-disable no-nested-ternary */
/* eslint-disable no-undef */
/* eslint-disable no-shadow */
/* eslint-disable @typescript-eslint/no-unused-vars */
// @ts-nocheck
import 'styled-components/macro';
import React from 'react';
import axios from 'axios';
import get from 'lodash/get';
import find from 'lodash/find';
import sumBy from 'lodash/sumBy';
import filter from 'lodash/filter';
import wc from 'which-country';
import Geocoder from 'react-mapbox-gl-geocoder';
import ReactMapGL, {
  Source,
  Layer,
  LinearInterpolator,
  PointerEvent,
  InteractiveMap,
} from 'react-map-gl';
import { useMediaQuery } from '@material-ui/core';
import { MapPin } from 'app/components/charts/GeoMap/common/MapPin';
// import mapStyle from 'app/components/charts/GeoMap/common/style/style.json';
import mapStyle2 from 'app/components/charts/GeoMap/common/style/style2.json';
import geoJSON from 'app/components/charts/GeoMap/common/style/geojson.json';
import { getRandomKey } from 'app/utils/getRandomKey';
import { LocationModel } from 'app/modules/report/model';
import { countries } from 'app/assets/data/countries';
import { Input } from 'app/components/inputs/textfields/PasswordTextField';
import { ProjectPalette } from 'app/theme';
import { MapGeoCoderInputListItem } from './common/MapGeoCoderInputListItem';
import Cluster from './common/MapCluster';
import { ClusterElement } from './common/MapCluster/ClusterElement';
import { MapControls } from './common/MapControls';
import { HorizontalBarChartValueModel } from 'src/app/components/charts/BarCharts/HorizontalBarChart/model';
import { MapPopup } from './common/MapPopup';

type Props = {
  data?: HorizontalBarChartValueModel;
  width?: number;
  height?: number;
  noData?: boolean;
  pointSelection?: LocationModel | null;
  setPointSelection?: Function;
};

export function GeoMap(props: Props) {
  const mapRef: React.RefObject<InteractiveMap> = React.useRef(null);
  const [maxPinValue, setMaxPinValue] = React.useState(
    Math.max(...get(props.data, 'mapMarkers', []).map((m: []) => m.value))
  );
  const isMobileWidth = useMediaQuery('(max-width: 600px)');
  const containerRef: React.RefObject<HTMLDivElement> = React.createRef();
  const [viewport, setViewport] = React.useState({
    width: props.width || 0,
    height: props.height || (isMobileWidth ? 200 : 557),
    latitude: 13,
    longitude: 25,
    zoom: props.noData ? 1 : isMobileWidth ? 0 : 1,
    minZoom: 0,
  });
  const [hoveredPin, setHoveredPin] = React.useState(null);
  const [hoveredLayer, setHoveredLayer] = React.useState(null);

  React.useEffect(() => {
    setViewport((prev) => ({
      ...prev,
      zoom: props.noData ? 1 : isMobileWidth ? 0 : 1,
      height: props.height || (isMobileWidth ? 200 : 557),
    }));
  }, [isMobileWidth]);

  React.useEffect(() => {
    setViewport((prev) => ({
      ...prev,
      width: get(containerRef.current, 'offsetWidth', 0),
    }));
  }, [get(containerRef.current, 'offsetWidth', 0)]);

  React.useEffect(
    () =>
      setMaxPinValue(
        Math.max(...get(props.data, 'mapMarkers', []).map((m: []) => m.value))
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
      setViewport((prev) => ({
        ...prev,
        latitude: 13,
        longitude: 25,
        zoom: 1,
      }));
    }
  }, [props.pointSelection]);

  function onGeoCoderSelected(viewportVar: [], item: []) {
    setViewport((prev) => ({ ...prev, ...viewportVar }));
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

  async function getPlaceFromLocation(longitude: number, latitude: number) {
    return axios
      .get(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${longitude},${latitude}.json?types=place&limit=5&access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`
      )
      .then((response: any) => {
        return get(response, 'data.features[0].place_name', null);
      })
      .catch((error: any) => {
        return null;
      });
  }

  function onMapClick(e: PointerEvent) {
    if (props.setPointSelection) {
      getPlaceFromLocation(e.lngLat[0], e.lngLat[1]).then((place: any) => {
        const iso3 = wc([e.lngLat[0], e.lngLat[1]]);
        let country = null;
        if (iso3) {
          country = find(countries, { iso3 });
        }
        props.setPointSelection({
          longitude: e.lngLat[0],
          latitude: e.lngLat[1],
          country: country || { label: '', value: '' },
          place,
        });
      });
    }
    setViewport((prev) => ({
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
    setViewport((prev: []) => ({
      ...prev,
      zoom,
      longitude,
      latitude,
      transitionInterpolator: new LinearInterpolator(),
      transitionDuration: 1000,
    }));
  }

  function handleZoomIn() {
    setViewport((prev) => ({
      ...prev,
      zoom: prev.zoom + 0.5,
      transitionInterpolator: new LinearInterpolator(),
      transitionDuration: 500,
    }));
  }

  function handleZoomOut() {
    if (viewport.zoom - 0.5 >= viewport.minZoom) {
      setViewport((prev) => ({
        ...prev,
        zoom: prev.zoom - 0.5,
        transitionInterpolator: new LinearInterpolator(),
        transitionDuration: 500,
      }));
    }
  }

  function onHover(event) {
    if (!hoveredPin) {
      let hoverLayerInfo = null;
      const { features } = event;

      const feature = features && features.find((f) => f.layer.id === 'data');
      if (feature) {
        hoverLayerInfo = {
          lngLat: event.lngLat,
          properties: feature.properties,
        };
        const countryPins = filter(props.data.mapMarkers, {
          country: feature.properties.name,
        });
        setHoveredLayer({
          latitude: event.lngLat[1],
          longitude: event.lngLat[0],
          name: feature.properties.name,
          value: sumBy(countryPins, 'value'),
          target: sumBy(countryPins, 'target'),
          reached: sumBy(countryPins, 'reached'),
          contribution: sumBy(countryPins, 'contribution'),
        });
      } else {
        setHoveredLayer(null);
      }
    } else if (hoveredLayer) {
      setHoveredLayer(null);
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
              margin: 0 0 20px 0;
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
        onHover={onHover}
        onViewportChange={setViewport}
        mapStyle={props.noData ? mapStyle2 : 'mapbox://styles/mapbox/light-v10'}
        onClick={props.noData ? onMapClick : undefined}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
      >
        {!props.noData && props.data && (
          <>
            {/* {props.data.countryFeatures && (
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
            )} */}
            {mapRef.current && (
              <Cluster
                map={mapRef.current.getMap()}
                radius={15}
                extent={512}
                nodeSize={22}
                minZoom={viewport.minZoom}
                element={(clusterProps: []) => (
                  <ClusterElement
                    {...clusterProps}
                    onClick={handleClusterClick}
                  />
                )}
              >
                {filter(
                  props.data.mapMarkers || [],
                  (m: any) => m.longitude
                ).map((m: any) => (
                  <MapPin
                    key={getRandomKey()}
                    name={m.name}
                    value={m.value}
                    target={m.target}
                    reached={m.reached}
                    project={m.project}
                    organisation={m.org}
                    latitude={m.latitude}
                    maxValue={maxPinValue}
                    longitude={m.longitude}
                    onHover={setHoveredPin}
                    contribution={m.contribution}
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
        {hoveredLayer && <MapPopup {...hoveredLayer} />}
        {hoveredPin && <MapPopup {...hoveredPin} onHover={setHoveredPin} />}
      </ReactMapGL>
      <MapControls zoomIn={handleZoomIn} zoomOut={handleZoomOut} />
    </div>
  );
}
