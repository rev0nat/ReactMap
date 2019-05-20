import React from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

export var icon = L.icon({
	sIconUrl: 'icons8-escaliers-100.png',

    sIconSize:     [38, 95], // size of the icon
    sIconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    sIconpopupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
})