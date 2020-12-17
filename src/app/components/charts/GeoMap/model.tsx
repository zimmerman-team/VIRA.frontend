import React from 'react';

export interface DataModel {
  mapMarkers: MapMarker[];
  countryFeatures: CountryFeatures;
}

interface MapMarker {
  name: string;
  longitude: number;
  latitude: number;
  value: number;
}

interface CountryFeatures {
  type: string;
  features: Feature[];
}

interface Feature {
  type: string;
  properties: Properties;
  geometry: Geometry;
  id: string;
}

interface Properties {
  name: string;
}

interface Geometry {
  type: string;
  coordinates: any[][][];
}
