(function() {
    'use strict';

    angular
        .module('app')
        .controller('aAccountController', aAccountController);

    aAccountController.$inject = ['$http', 'mainFactory'];


    /* @ngInject */
    function aAccountController($http, mainFactory) {
        var vm = this;

        mainFactory.getUsers().then(
            function(response) {
                vm.users = reponse;
                console.log(response);
            },
            function(error) {
                console.log(error);
            });


        activate();

        function aAccountEditController($http, mainFactory) {
            var vm = this;

            mainFactory.editUsers().then(
                function(response) {
                    vm.users = response;
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
