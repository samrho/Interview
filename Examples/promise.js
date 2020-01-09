const createPromise = () =>
	new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve("resolved!!");
		}, 2000);
	});

createPromise().then((value) => {
	console.log(value);
});

Promise.all([createPromise()]).then((value) => {
	console.log(value);
});

(async function dd() {
	const value = await createPromise();
	console.log(value, "async func1!");
})();
