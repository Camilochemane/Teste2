'use strict';

/**
 * Module dependencies.
 */
var should = require('should'),
	mongoose = require('mongoose'),
	Utente = mongoose.model('Utente'),
	Filme = mongoose.model('Filme'),
	User = mongoose.model('User'),
	Aluguere = mongoose.model('Aluguere');

/**
 * Globals
 */
var user, aluguere;

/**
 * Unit tests
 */
describe('Aluguere Model Unit Tests:', function() {
	beforeEach(function(done) {
		user = new User({
			firstName: 'Full',
			lastName: 'Name',
			displayName: 'Full Name',
			email: 'test@test.com',
			username: 'username',
			password: 'password'
		});

		user.save(function() { 
			aluguere = new Aluguere({
				filme: filme,
				utente: utente,
				dataEmprestimo: 'dataEmprestimo',
				DataDevolucao:'DataDevolucao',
				user: user
			});

			done();
		});
	});

	describe('Method Save', function() {
		it('should be able to save without problems', function(done) {
			return aluguere.save(function(err) {
				should.not.exist(err);
				done();
			});
		});

		it('should be able to show an error when try to save without name', function(done) { 
			aluguere.name = '';

			return aluguere.save(function(err) {
				should.exist(err);
				done();
			});
		});
	});

	afterEach(function(done) { 
		Aluguere.remove().exec();
		User.remove().exec();

		done();
	});
});