const fetch = require("node-fetch");
const URL = "https://api.github.com/users/samrho";

const initialize = async (URL) => {
	const result = await fetch(URL);
	return result;
};

(async () => {
	const res = await initialize(URL);
	data = res;
})();
