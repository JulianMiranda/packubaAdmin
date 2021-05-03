import {UploadImage} from '../firebase/uploadImage';

export const PrepareEditObject = async (resource, params) => {
	const {data, previousData} = params;
	if (resource === 'users') return await user(resource, data, previousData);
	else if (resource === 'categories') return category(resource, data, previousData);
	else if (resource === 'subcategories') return subcategory(resource, data, previousData);

	return {};
};

const user = async (resource, data, previousData) => {
	const object = {};

	if (data.name !== previousData.name) {
		object.name = data.name;
	}
	if (data.email !== previousData.email) {
		object.email = data.email;
	}
	if (data.role !== previousData.role) {
		object.role = data.role;
	}
	if (!data.image.id) {
		const url = await UploadImage(resource, [data.image]);
		object.image = {url: url[0]};
	}
	if (data.status !== previousData.status) {
		object.status = data.status;
	}

	if (JSON.stringify(object) === '{}') return null;

	return object;
};

const category = async (resource, data, previousData) => {
	const object = {};

	if (data.name !== previousData.name) {
		object.name = data.name;
	}
	if (!data.image.id) {
		const url = await UploadImage(resource, [data.image]);
		object.image = {url: url[0]};
	}
	if (data.status !== previousData.status) {
		object.status = data.status;
	}

	return object;
};
const subcategory = async (resource, data, previousData) => {
	const object = {};

	if (data.name !== previousData.name) {
		object.name = data.name;
	}
	if (data.price !== previousData.price) {
		object.price = data.price;
	}
	if (data.currency !== previousData.currency) {
		object.currency = data.currency;
	}
	if (data.status !== previousData.status) {
		object.status = data.status;
	}
	if (data.category.id !== previousData.category.id) {
		object.category = data.category.id;
	}
	if (!data.image.id) {
		const url = await UploadImage(resource, [data.image]);
		object.image = {url: url[0]};
	}
	return object;
};
