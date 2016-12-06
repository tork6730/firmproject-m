(function() {
    'use strict';

    angular
        .module('app')
        .controller('aProfileController', aProfileController);


    aProfileController.$inject = ['dependencies'];




    /* @ngInject */
    function aProfileController() {
        var vm = this;
        vm.title = 'Controller';

        activate();

        ////////////////

        function activate() {}
    }
})();
