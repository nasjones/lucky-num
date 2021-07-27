/** processForm: get data from form and make AJAX call to our API. */
const numberAPI = "http://numbersapi.com/";
async function processForm(evt) {
	evt.preventDefault();
	let data = {};
	$("b").empty();

	for (let item of $(evt.target).find("input")) {
		data[item.id] = item.value;
	}
	let resp = await axios.post("/api/get-lucky-num", data);
	handleResponse(resp);
}

/** handleResponse: deal with response from our lucky-num API. */

async function handleResponse(resp) {
	if (resp.data["errors"]) {
		for (let error in resp.data["errors"]) {
			$(`#${error}-err`).text(resp.data["errors"][error]);
		}
	} else {
		$("#lucky-results")
			.html(`<p>Your lucky number is ${resp.data["num"]["num"]} (${resp.data["num"]["fact"]}).<br> <br>
		Your birth year (${resp.data["year"]["year"]}) fact is ${resp.data["year"]["fact"]}.</p>`);
	}
}

$("#lucky-form").on("submit", processForm);
