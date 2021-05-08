import {UploadImage} from '../firebase/uploadImage';

export const PrepareCreateObject = async (resource, params) => {
	if (resource === 'categories') return await categories(resource, params);
	else if (resource === 'subcategories') return subcategories(resource, params);

	return {};
};
const categories = async (resource, params) => {
	const object = {};
	object.name = params.data.name;
	const url = await UploadImage(resource, [params.data.image]);
	object.image = {url: url[0]};

	return object;
};
const subcategories = async (resource, params) => {
	const object = {};

	object.name = params.data.name;
	object.category = params.data.category;
	object.price = params.data.price;
	object.weight = params.data.weight;
	let urls = [];

	urls = await UploadImage(resource, params.data.images);

	object.images = urls.map((url) => ({
		url,
	}));

	/* const url = await UploadImage(resource, [params.data.image]);
	object.image = {url: url[0]}; */

	return object;
};
