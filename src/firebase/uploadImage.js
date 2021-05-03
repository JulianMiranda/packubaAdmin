import * as firebase from 'firebase/app';
import 'firebase/storage';
import uniqid from 'uniqid';
import imageCompression from 'browser-image-compression';

const saveImage = (image) => {
	return new Promise(async (resolve, reject) => {
		const {path, name, blob} = image;
		const storageRef = firebase.storage().ref();
		const uploadTask = storageRef.child(`${path}/${name}`).put(blob);
		uploadTask.on(
			firebase.storage.TaskEvent.STATE_CHANGED,
			(snapshot) => {},
			(error) => {
				reject(error);
			},
			() => {
				uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
					resolve(downloadURL);
				});
			},
		);
	});
};

const resize = async (path, image) => {
	const {url, rawFile} = image;
	const extension = rawFile.type.split('/')[1];
	const name = `${uniqid()}.${extension}`;
	const options = {maxWidthOrHeight: path === 'users' ? 80 : 300, useWebWorker: true};
	try {
		debugger;
		const blobCreated = await fetch(url).then((r) => r.blob());
		const blob = await imageCompression(blobCreated, options);
		return {path, blob, name};
	} catch (e) {
		console.error(e);
	}
};

export const UploadImage = async (path, images) => {
	const processedImages = await Promise.all(images.map((image) => resize(path, image)));
	return Promise.all(processedImages.map((image) => saveImage(image)));
};
