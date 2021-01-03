"use strict";

async function getData() {
	const cacheVersion = 1;
	const cacheName = `girlscript-${cacheVersion}`;
	const urls = [
		'/assets/Images/logo/logo_for_boilerplate_1.png',
		'/assets/Images/logo/logo_for_boilerplate_2.png',
		'/assets/Images/Front-img/event.jpg',
		'/assets/Images/Front-img/girl_coding.jpeg',
		'/assets/Images/Front-img/girl_writing_on_board.jpeg',
		'/assets/Images/Front-img/parallax.jpg',
		'/assets/Images/Front-img/temple.jpg',
		'/assets/Images/logo/Logo1.png',
		'/assets/Images/logo/Logo2.png',
		'/assets/Images/logo/logo.png',
		'https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/fonts/fontawesome-webfont.woff2?v=4.7.0',
		'/assets/Images/contact/intro_to_blockchain.jpg',
		'/assets/Images/contact/power_of_linkedin.jpg',
		'/assets/Images/contact/web_dev_bootcamp.jpg'
		
	];

	let cachedData = await getCachedData(cacheName, urls);

	if (cachedData) {
		console.log('Retrieved cached data');
	}

	const cacheStorage = await caches.open(cacheName);
	await cacheStorage.addAll(urls);
	await deleteOldCaches(cacheName);
}

// Get data from the cache.
async function getCachedData(cacheName, url) {
	const result = [];
	const cacheStorage = await caches.open(cacheName);

	for (const request of await cacheStorage.keys()) {
		if (request.url.endsWith('.jpg') || request.url.endsWith('.png') || request.url.startsWith('https') || request.url.startsWith('.jpeg')) {
			result.push(await cacheStorage.match(request));
		}
	}
}

// Delete any old caches to respect user's disk space.
async function deleteOldCaches(currentCache) {
	const keys = await caches.keys();

	for (const key of keys) {
		const isOurCache = 'girlscript-' === key.substr(0, 11);

		if (isOurCache) {
			setTimeout(() => {
				caches.delete(key);
			}, 60 * 1000);
		}
		if (currentCache === key || !isOurCache) {
			continue;
		}

		caches.delete(key);
	}
}

(async function startCaching() {
	try {
		await getData();
	} catch (error) {
		console.error({ error });
	}
})();
