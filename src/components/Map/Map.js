import React from "react";
import mapboxgl from 'mapbox-gl'
import ViewMap from './ViewMap/ViewMap'

mapboxgl.accessToken = 'pk.eyJ1Ijoib2xnYWphZWdlciIsImEiOiJjazJibzUxdHowNWIyM2lxdmw0cnIxdjR4In0.kPvxLQOUk9Kw6NZGTvWqQA';

export const Map = ({ setPage }) => {
  return (
    <>
      <ViewMap />
    </>
  );
};
