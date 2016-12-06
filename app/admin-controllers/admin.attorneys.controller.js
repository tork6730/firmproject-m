(function() {
    'use strict';

    angular
        .module('app')
        .controller('adminAttorneyController', adminAttorneyController);

    adminAttorneyController.$inject = ['dependencies'];

    /* @ngInject */
    function adminAttorneyController(dependencies) {
        var vm = this;
        vm.title = 'Controller';

        activate();

        ////////////////

        function activate() {}
    }
})();
