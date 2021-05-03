import {fetchGeo} from '../fetch';

export const returnGeo = async (longitude, latitude) => {
	const info = await fetchGeo(longitude, latitude);
	const {query} = info.data;
	const {features} = info.data;

	const response = {
		coordinates: [query[0], query[1]],
		address: '',
		city: '',
		region: '',
		country: '',
	};

	for (const feat of features) {
		const type = feat.place_type[0];

		if (type === 'poi') response.address = feat.text;
		else if (type === 'address') response.address = feat.text;
		else if (type === 'neighborhood') response.address = feat.text;
		else if (type === 'locality') response.address = feat.text;

		if (type === 'place') response.city = feat.text;
		else if (type === 'district') response.city = feat.text;

		if (type === 'region') response.region = feat.text;
		if (type === 'country') response.country = feat.text;
	}
	return response;
};
