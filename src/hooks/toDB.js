async function sendReqToDB(reqType, data) {
	const dataString = objToString(reqType, data);
	const URL = process.env.REACT_APP_URL;
	const AUTH_TOKEN = process.env.REACT_APP_AUTH_TOKEN;
	try {
		const headers = {
			Authorization: AUTH_TOKEN,
			"Content-Type": "application/json",
			"Access-Control-Allow-Origin": "*",
		};
		const body = JSON.stringify({
			Query: `Execute;${reqType};${dataString};КОНЕЦ`,
		});

		const response = await fetch(URL, {
			method: "POST",
			mode: "no-cors",
			headers,
			body,
		});
		const res = await response.json();
		// console.log(res);
		return res;
	} catch (err) {
		// console.log(err);
	}
}

function objToString(reqType, data) {
	return (
		data.id +
		"#" +
		data.email +
		"#" +
		data.password +
		"#" +
		data.PIB +
		"#" +
		data.contract +
		"#" +
		data.address +
		"#" +
		data.verificationCode
	);
}

module.exports = sendReqToDB;
