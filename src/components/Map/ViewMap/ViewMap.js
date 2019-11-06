import React, { Component } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

mapboxgl.accessToken =
  "pk.eyJ1Ijoib2xnYWphZWdlciIsImEiOiJjazJibzUxdHowNWIyM2lxdmw0cnIxdjR4In0.kPvxLQOUk9Kw6NZGTvWqQA";

class ViewMap extends Component {
  componentDidMount() {
    this.map = new mapboxgl.Map({
      container: this.mapContainer,
      style: "mapbox://styles/mapbox/streets-v9",
      center: [13.07, 52.41],
      zoom: 15
    });
  }

  componentWillUnmount() {
    this.map.remove();
  }

  render() {
    const style = {
      position: "absolute",
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      width: "100%",
      height: window.innerHeight - 70
    };

    return (
      <div style={{ position: "relative", zIndex: -10 }}>
        <div style={style} ref={el => (this.mapContainer = el)} />
      </div>
    );
  }
}

export default ViewMap;
