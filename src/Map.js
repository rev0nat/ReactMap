import React from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import styled from 'styled-components';
import './map.css';

const Wrapper = styled.div`
	width: ${props => props.width};
	heigth: ${props => props.height};
`;

export default class Map extends React.Component {
	componentDidMount(){
		this.map = L.map('map', {
			center: [58, 16],
			zoom: 10,
			zoomControl: false
		});

		L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/rastertiles/voyager_nolabels/{z}/{x}/{y}{r}.png', {
			maxZoom: 20,
			maxNativeZoom: 17,
		}).addTo(this.map);
	}
	render(){
		return <Wrapper width="1280px" height="720px" id="map" />
	}
}