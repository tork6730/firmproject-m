(function() {
    'use strict';

    angular
        .module('app')
        .controller('aDocumentsController', aDocumentsController);


    aDocumentsController.$inject = ['dependencies'];




    /* @ngInject */
    function aDocumentsController(dependencies) {
        var vm = this;
        vm.title = 'Controller';

        activate();

        ////////////////

        function activate() {}
    }
})();
