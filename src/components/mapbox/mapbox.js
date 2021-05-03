import React, {useState, useRef, useEffect} from 'react';
import mapboxgl from 'mapbox-gl';
import {Button} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/CloseRounded';
import {useStyles} from './mapStyles';

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;

const Map = (props) => {
	const classes = useStyles();
	const mapContainerRef = useRef(null);

	const [lng, setLng] = useState(0);
	const [lat, setLat] = useState(0);
	const [showButton, setShowButton] = useState(false);

	const {setLongitude, setLatitude, longitude, latitude, setMap} = props;

	useEffect(() => {
		const map = new mapboxgl.Map({
			container: mapContainerRef.current,
			style: 'mapbox://styles/mapbox/streets-v11',
			center: [longitude, latitude],
			zoom: 12.5,
		});

		const marker = new mapboxgl.Marker();

		map.addControl(new mapboxgl.NavigationControl(), 'bottom-right');

		map.on('load', () => {
			map.resize();
			setShowButton(true);
		});

		map.on('move', async () => {
			const {lng, lat} = map.getCenter();
			setLng(lng);
			setLat(lat);

			marker.setLngLat([lng, lat]).addTo(map);
		});

		return () => map.remove();
	}, [longitude, latitude, showButton]);

	return (
		<div>
			{showButton && (
				<Button
					className={classes.closeButton}
					variant="contained"
					color="primary"
					startIcon={<CloseIcon style={{fontSize: 40}} />}
					onClick={() => {
						setMap(false);
						setLongitude(lng);
						setLatitude(lat);
					}}
				/>
			)}
			<div className={classes.mapContainer} ref={mapContainerRef} />
		</div>
	);
};

export default Map;
