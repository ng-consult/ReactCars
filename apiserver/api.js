const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();


require('isomorphic-fetch');

// SET THE BLOODY ALLOW ORIGIN

const allow = (req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
	next();
};

app.use(allow);

app.get('/makes.json', (req, res) => {
		setTimeout(() => {
				res.json(JSON.parse(fs.readFileSync(path.resolve(`${__dirname}/makes.json`), 'utf8')));
		}, 500);
});

app.get('/proxy/:url', (req, res) => {
	const {url} = req.params;
	console.log('URL', url);
	fetch(url, {}).then(body => body.json()).then(t => res.json(t)).catch((e) => {
		console.log(e);
		res.status(501).send({
			text: `error querying ${url}`,
			e,
		});
	});
});

app.listen(2017, () => {
	console.log('MINI API PROXY SERVER LAUNCHED');
});