/**
 * THE LOCAL SERVER TO PROXY CORS
 * NO_CORS HAS BEEN DEPRECATED
 *
 *
 * @type {string}
 */

const API_SERVER = 'http://localhost:2017';
const PROXY_ADDRESS = `${API_SERVER}/proxy`;

const cache = {};

export const dispatchThatFetch = (dispatch) => (REQUEST_ACTION, RECEIVE_ACTION, FAIL_ACTION) => (url, proxy = true) => {

	const URL = proxy ? `${PROXY_ADDRESS}/${encodeURIComponent(url)}` : `${API_SERVER}/${url}`;

	if (typeof cache[URL] !== 'undefined') {
		dispatch({
			type: RECEIVE_ACTION,
			json: cache[URL],
		});
	} else {
		dispatch({type: REQUEST_ACTION});
		return fetch(URL).then(response => {
			console.log('RESPONSE', response)
			return response.json();
		}).then(json => {
			console.log('textjson', json);
			cache[URL] = json;
			dispatch({
				type: RECEIVE_ACTION,
				json,
			});
		}).catch((e) => {
			console.log('error', e)
			dispatch({
				type: FAIL_ACTION,
				e,
			});
		});
	}
};
