'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * Aluguere Schema
 */
var AluguereSchema = new Schema({
	utente: {
	type: Schema.ObjectId,
		ref: 'utente'
	},
	filme: {
		type: Schema.ObjectId,
		ref: 'filme'
	},

	dataEmprestimo: {
		type: Date,
		default: Date.now,
		required: 'Please fill Aluguere dataEmprestimo',
		trim: true
	},

	DataDevolucao: {
		type: String,
		default: '',
		required: 'Please fill Aluguere DataDevolucao',
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

mongoose.model('Aluguere', AluguereSchema);