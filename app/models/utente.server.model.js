'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * Utente Schema
 */
var UtenteSchema = new Schema({
	name: {
		type: String,
		default: '',
		required: 'Please fill Utente name',
		trim: true
	},
	idade: {
		type: Number,
		default: '',
		required: 'Please fill Utente idade',
		trim: true
	},
	sexo: {
		type: String,
		default: '',
		required: 'Please fill Utente sexo',
		trim: true
	},
	bairro: {
		type: String,
		default: '',
		required: 'Please fill Utente bairro',
		trim: true
	},
	distrito: {
		type: String,
		default: '',
		required: 'Please fill Utente distrito',
		trim: true
	},
	bi: {
		type: String,
		default: '',
		required: 'Please fill Utente bi',
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

mongoose.model('Utente', UtenteSchema);