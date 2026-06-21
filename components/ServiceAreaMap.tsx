"use client";

import { MapContainer, TileLayer, Polygon, Tooltip } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const AREAS: {
  name: string;
  color: string;
  coords: [number, number][];
  offset?: [number, number];
}[] = [
  {
    name: "Alief",
    color: "#8B7AAB",
    coords: [
      [29.735, -95.650],
      [29.735, -95.555],
      [29.683, -95.555],
      [29.683, -95.650],
    ],
  },
  {
    name: "Stafford",
    color: "#5BA89A",
    coords: [
      [29.638, -95.574],
      [29.638, -95.527],
      [29.598, -95.527],
      [29.598, -95.574],
    ],
    offset: [-8, -18],
  },
  {
    name: "Sugar Land",
    color: "#8B7AAB",
    coords: [
      [29.670, -95.740],
      [29.670, -95.575],
      [29.557, -95.575],
      [29.557, -95.740],
    ],
  },
  {
    name: "Richmond",
    color: "#5BA89A",
    coords: [
      [29.602, -95.800],
      [29.602, -95.735],
      [29.558, -95.735],
      [29.558, -95.800],
    ],
  },
  {
    name: "Missouri City",
    color: "#B8A9D9",
    coords: [
      [29.660, -95.518],
      [29.660, -95.450],
      [29.545, -95.450],
      [29.545, -95.518],
    ],
    offset: [8, 18],
  },
];

export default function ServiceAreaMap() {
  return (
    <MapContainer
      center={[29.620, -95.620]}
      zoom={10}
      style={{ height: "420px", width: "100%" }}
      scrollWheelZoom={false}
      attributionControl={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {AREAS.map((area) => (
        <Polygon
          key={area.name}
          positions={area.coords}
          pathOptions={{
            color: area.color,
            weight: 2.5,
            dashArray: "8 6",
            fillColor: area.color,
            fillOpacity: 0.1,
          }}
        >
          <Tooltip permanent direction="center" className="area-label" offset={area.offset ?? [0, 0]}>
            {area.name}
          </Tooltip>
        </Polygon>
      ))}
    </MapContainer>
  );
}
