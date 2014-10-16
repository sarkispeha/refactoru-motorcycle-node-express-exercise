// CONTROLLER FILE

// Go out a directory (back to root directory)
var locations = require('../models/model.js');
// models.js is shared to index.js


// Object literal, one instance of index on it
var indexController = {
	// This looks for index.jade in view file
	index: function(req, res) {
		res.render('index');
	},
	// This looks for chile.jade in view file
	chile: function(req, res) {
		res.render('chile', {
			locations: locations[0]
		});
	},
		// This looks for peru.jade in view file
	peru: function(req, res) {
		res.render('peru', {
			locations: locations[1]
		});
	},
		// This looks for colombia.jade in view file
	colombia: function(req, res) {
		res.render('colombia', {
			locations: locations[2]
		});
	},
		// This looks for venezuela.jade in view file
	venezuela: function(req, res) {
		res.render('venezuela', {
			locations: locations[3]
		});
	},
		// This looks for usa.jade in view file
	usa: function(req, res) {
		res.render('usa', {
			locations: locations[4]
		});
	},
	wtf: function(req, res) {
		var path = req.params.name;
		res.render('wtf');
		console.log(path);
	},
	

};

module.exports = indexController;