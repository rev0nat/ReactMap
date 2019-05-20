import React from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import styled from 'styled-components';
import './map.css';
import {icon} from './icons.js';

const Wrapper = styled.div`
	width: ${props => props.width};
	heigth: ${props => props.height};
`;

export default class Map extends React.Component {
	componentDidMount(){
		this.map = L.map('map', {
			center: [48.864716, 2.349014],
			zoom: 10,
			zoomControl: false
		});

		L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/toner/{z}/{x}/{y}{r}.{ext}', {
		attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
		subdomains: 'abcd',
		minZoom: 10,
		maxZoom: 20,
		ext: 'png'
		}).addTo(this.map);

		L.marker([48.864716, 2.349014], {icon: icon}).addTo(this.map);
	}

	render(){
		return <Wrapper width="1280px" height="720px" id="map" />
	}
}