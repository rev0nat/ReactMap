import React from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import styled from 'styled-components';
import './map.css';
//import {icon} from './icons.js';

const Wrapper = styled.div`
	width: ${props => props.width};
	heigth: ${props => props.height};
`;

const bearer = 'bearer YW50ZW/2FiqnGdTj0VupDzHb90de3b6Oew==';
const API = 'https://api.staging.skatekrak.com/';
const SEARCH = 'spots/search'
const NEW = '?'
const ADD = '&'
const QUERY = 'query='
const DEFAULT_QUERY = 'street';

export default class Map extends React.Component {
	constructor(props) {
    super(props);

    this.state = {
      data: null,
    };
  }

	componentDidMount(){

		this.map = L.map('map', {
			center: [48.864716, 2.349014],
			zoom: 10,
			zoomControl: false,
		});

		L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/toner/{z}/{x}/{y}{r}.{ext}', {
		attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
		subdomains: 'abcd',
		minZoom: 5,
		maxZoom: 15,
		ext: 'png'
		}).addTo(this.map);

		fetch(API + SEARCH + NEW + QUERY + DEFAULT_QUERY, { 
		   method: 'GET', 
		   headers: new Headers({
		     'Authorization': bearer,
		   }), 
		 })
		.then(response => response.json())
      	.then(data => {
      		console.log(data);
      		this.setState({ data });
      	});
		//L.marker([48.864716, 2.349014], {icon: icon}).addTo(this.map);
	}

	render(){
		return <Wrapper width="1280px" height="720px" id="data" />
//		return <Wrapper width="1280px" height="720px" id="map" />
	}
}