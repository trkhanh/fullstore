// Simulate config options from your production environment by
// customising the .env file in your project's root folder.
require('dotenv').config();

// Require keystone
var keystone = require('keystone');

// Initialise Keystone with your project's configuration.
// See http://keystonejs.com/guide/config for available options
// and documentation.

keystone.init({
	'name': 'fullstore',
	'brand': 'fullstore',

	'sass': 'public',
	'static': 'public',
	'favicon': 'public/favicon.ico',
	'views': 'templates/views',
	'view engine': 'pug',
	'mongo': 'mongodb://admin:bFZWuv5pM2QmdZQC@cluster0-shard-00-00-oogxe.mongodb.net:27017,cluster0-shard-00-01-oogxe.mongodb.net:27017,cluster0-shard-00-02-oogxe.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin',
	'emails': 'templates/emails',
	'cloudinary config': 'cloudinary://388629431712445:3weV7eNgMz2OUlzwD4mbRrzq7Dg@dnxhsinfi',
	'cookie secret':'abcdf', //TODO: this thing need to change for production env
	'auto update': true,
	'session': true,
	'auth': true,
	'user model': 'User',
});

// Load your project's Models
keystone.import('models');

// Setup common locals for your templates. The following are required for the
// bundled templates and layouts. Any runtime locals (that should be set uniquely
// for each request) should be added to ./routes/middleware.js
keystone.set('locals', {
	_: require('lodash'),
	env: keystone.get('env'),
	utils: keystone.utils,
	editable: keystone.content.editable,
});

// Load your project's Routes
keystone.set('routes', require('./routes'));


// Configure the navigation bar in Keystone's Admin UI
keystone.set('nav', {
	galleries: 'galleries',
	enquiries: 'enquiries',
	users: 'users',
});
// Configure the Cloudinary Update
keystone.set('cloudinary config', { cloud_name: 'dnxhsinfi', api_key: '388629431712445', api_secret: '3weV7eNgMz2OUlzwD4mbRrzq7Dg' });
// Start Keystone to connect to your database and initialise the web server

//TODO: Ka will config mail sever later

// if (!process.env.MAILGUN_API_KEY || !process.env.MAILGUN_DOMAIN) {
// 	console.log('----------------------------------------'
// 	+ '\nWARNING: MISSING MAILGUN CREDENTIALS'
// 	+ '\n----------------------------------------'
// 	+ '\nYou have opted into email sending but have not provided'
// 	+ '\nmailgun credentials. Attempts to send will fail.'
// 	+ '\n\nCreate a mailgun account and add the credentials to the .env file to'
// 	+ '\nset up your mailgun integration');
// }


keystone.start();
