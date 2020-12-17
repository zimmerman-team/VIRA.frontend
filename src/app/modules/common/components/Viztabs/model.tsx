export interface PropsModel {
  value: number;
  onTabClick: any;
  onBarChartLegendClick: any;
  onBubbleSelect: any;
  barChartData: BarChartItemModel[];
  barChartLegends: BarChartLegend[];
  bubbleChartData: BubbleChartData;
  selectedBubble: string;
  geoMapData: GeoMapData;
}

export interface BarChartItemModel {
  name: string;
  value1: number;
  value2: number;
  value3: number;
  value4?: number;
  value1Color: string;
  value2Color: string;
  value4Color: string;
  tooltip: Tooltip;
}

export interface Tooltip {
  title: string;
  items: Item[];
}

export interface Item {
  label: string;
  value: any;
  percentage?: string;
}

export interface BarChartLegend {
  label: string;
  selected: boolean;
}

export interface BubbleChartData {
  name: string;
  color: string;
  children: Children[];
}

export interface Children {
  name: string;
  color: string;
  number: number;
  opacity: number;
  targetValue: number;
  insContribution: any;
  loc: number;
  commited: number;
  targetPercentage: number;
}

export interface GeoMapData {
  mapMarkers: MapMarker[];
  countryFeatures: CountryFeatures;
}

export interface MapMarker {
  name: string;
  longitude: number;
  latitude: number;
  value: number;
}

export interface CountryFeatures {
  type: string;
  features: Feature[];
}

export interface Feature {
  type: string;
  properties: Properties;
  geometry: Geometry;
  id: string;
}

export interface Properties {
  name: string;
}

export interface Geometry {
  type: string;
  coordinates: any[][][];
}
