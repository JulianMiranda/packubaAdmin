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

	const url = await UploadImage(resource, [params.data.image]);
	object.image = {url: url[0]};

	return object;
};
