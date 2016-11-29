(function() {
    'use strict';

    angular
        .module('app')
        .factory('registerFactory', registerFactory);

    registerFactory.$inject = ['$http', '$q', ];

    /* @ngInject */
    function registerFactory($http, $q, ) {
        var service = {
            func: func
        };
        return service;

        ////////////////

        function func() {}
    }
})();
