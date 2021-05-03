import {getToken, getHeaders} from '../util/api';
import {fetchUtils} from 'react-admin';

const apiUrl = process.env.REACT_APP_API_URL;
const mapboxToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;
const httpClient = fetchUtils.fetchJson;

export async function fetchLogin() {
	const headers = await getHeaders();

	return httpClient(`${apiUrl}/login`, {headers}).then(({json}) => {
		return {
			data: json,
		};
	});
}

export async function fetchRoles() {
	const token = await getToken();
	const headers = new Headers({Accept: 'application/json'});
	headers.set('x-token', token);

	return httpClient(`${apiUrl}/getRoles`, {headers}).then(({json}) => {
		return {
			data: json,
		};
	});
}

export async function fetchGeo(lng, lat) {
	const headers = new Headers({Accept: 'application/json'});
	return httpClient(
		`https://api.mapbox.com/geocoding/v5/mapbox.places/${lng},${lat}.json?access_token=${mapboxToken}&language=es`,
		{headers},
	).then(({json}) => {
		return {
			data: json,
		};
	});
}
