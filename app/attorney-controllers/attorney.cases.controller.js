(function() {
        'use strict';

        angular
            .module('app')
            .controller('aCasesController', aCasesController);

        aCasesController.$inject = ['$http', 'mainFactory'];


        /* @ngInject */
        function aCasesController($http, mainFactory) {
            var vm = this;


            // activate();

            mainFactory.getCases('???').then(
                function(response) {
                    vm.cases = response;
                    console.log(response);
                },
                function(error) {
                    console.log(error);
                });
        }

        ////////////////

        function activate() {}
    }
})();
