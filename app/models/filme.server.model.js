'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * Filme Schema
 */
var FilmeSchema = new Schema({
	
titulo: {
		type: String,
		default: '',
		required: 'Please fill Filme titulo',
		trim: true
	},
	sinopse: {
		type: String,
		default: '',
		required: 'Please fill Filme sinopse',
		trim: true
	},

	categoria: {
		type: String,
		default: '',
		required: 'Please fill Filme categoria',
		trim: true
	},

	actorPrincipal: {
		type: String,
		default: '',
		required: 'Please fill Filme actorPrincipal',
		trim: true
	},

	actor: {
		type: String,
		default: '',
		required: 'Please fill Filme actor',
		trim: true
	},
	estado: {
		type: String,
		default: '',
		required: 'Please fill Filme estado',
		trim: true
	},
	created: {
		type: Date,
		default: Date.now
	},
	user: {
		type: Schema.ObjectId,
		ref: 'User'
	}
});

mongoose.model('Filme', FilmeSchema);