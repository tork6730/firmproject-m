(function() {
    'use strict';

    angular
        .module('app')
        .controller('aCasesController', aCasesController);

    aCasesController.$inject = ['dependencies'];


    /* @ngInject */
    function aCasesController() {
        var vm = this;
        vm.title = 'Controller';

        activate();

        ////////////////

        function activate() {}
    }
})();
