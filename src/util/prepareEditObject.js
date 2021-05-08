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
	if (data.weight !== previousData.weight) {
		object.weight = data.weight;
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
	if (data.images && data.images.length > 0) {
		let urls = [];

		const addImages = data.images.filter((image) => !image.id);
		if (addImages.length > 0) {
			urls = await UploadImage(resource, addImages);
		}

		if (urls.length > 0) {
			object.images = urls.map((url) => ({
				url,
			}));
		}

		const deleteImages = previousData.images
			.filter(
				(x) =>
					!data.images
						.filter((image) => image.id)
						.map((x) => x.id)
						.includes(x.id),
			)
			.map((image) => image.id);

		if (deleteImages.length > 0) object.deleteImages = deleteImages;
	}
	return object;
};
