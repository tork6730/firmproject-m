(function() {
    'use strict';

    angular
        .module('app')
        .controller('aClientsController', aClientsController);

    aClientsController.$inject = ['dependencies'];


    /* @ngInject */
    function aClientsController(dependencies) {
        var vm = this;
        vm.title = 'Controller';

        activate();

        ////////////////

        function activate() {}
    }
})();
