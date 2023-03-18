#!/usr/bin/env node
import minimist from 'minimist';
import express from 'express';
import { rps, rpsls } from './lib/rpsls.js'

var args = minimist(process.argv.slice(2));
const port = args.port || 5000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/app', (req, res) => {
	res.status(200).send('200 OK');
});
app.get('/app/rps', (req, res) => {
	res.status(200).send(JSON.stringify(rps()));
});
app.get('/app/rpsls', (req, res) => {
	res.status(200).send(JSON.stringify(rpsls()));
});

app.get('/app/rps/play', (req, res) => {
	res.status(200).send(JSON.stringify(rps(req.query.move)));
});
app.get('/app/rpsls/play', (req, res) => {
	res.status(200).send(JSON.stringify(rpsls(req.query.move)));
});

app.post('/app/rps/play', (req, res) => {
	res.status(200).send(JSON.stringify(rps(req.body.move)));
});
app.post('/app/rpsls/play', (req, res) => {
	res.status(200).send(JSON.stringify(rpsls(req.body.move)));
});

app.get('/app/rps/play/:move', (req, res) => {
	res.status(200).send(JSON.stringify(rps(req.params.move)));
});
app.get('/app/rpsls/play/:move', (req, res) => {
	res.status(200).send(JSON.stringify(rps(req.params.move)));
});

app.get('*', (req, res) => {
	res.status(404).send('404 NOT FOUND');
});

app.listen(port, () => {
	console.log('Server listening on port ' + port);
});
