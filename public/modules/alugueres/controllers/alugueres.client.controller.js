'use strict';

// Alugueres controller
angular.module('alugueres').controller('AlugueresController', ['$scope', '$stateParams', '$location', 'Authentication', 'Alugueres','Utentes','Filmes',
	function($scope, $stateParams, $location, Authentication, Alugueres, Utentes, Filmes) {
		$scope.authentication = Authentication;

		// Create new Aluguere
		$scope.create = function() {
			// Create new Aluguere object
			var aluguere = new Alugueres ({
				DataEmprestimo: this.DataEmprestimo,
				Dataevolucao: this.Dataevolucao,
				utente:this.utente._id,
				filme:this.filme._id

			});

			// Redirect after save
			aluguere.$save(function(response) {
				$location.path('alugueres/' + response._id);

				// Clear form fields
				$scope.name = '';
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

$scope.direct= function(){
			$location.path('alugueres/create');
		};

		$scope.listaUtentesFilmes=function(){
			$scope.Utentes=Utentes.listar();
			$scope.Filmes=Filmes.listar();
			};

		// Remove existing Aluguere
		$scope.remove = function(aluguere) {
			if ( aluguere ) { 
				aluguere.$remove();

				for (var i in $scope.alugueres) {
					if ($scope.alugueres [i] === aluguere) {
						$scope.alugueres.splice(i, 1);
					}
				}
			} else {
				$scope.aluguere.$remove(function() {
					$location.path('alugueres');
				});
			}
		};

		// Update existing Aluguere
		$scope.update = function() {
			var aluguere = $scope.aluguere;

			aluguere.$update(function() {
				$location.path('alugueres/' + aluguere._id);
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		// Find a list of Alugueres
		$scope.find = function() {
			$scope.alugueres = Alugueres.query();
		};

		// Find existing Aluguere
		$scope.findOne = function() {
			$scope.aluguere = Alugueres.get({ 
				aluguereId: $stateParams.aluguereId
			});
		};
	}
]);