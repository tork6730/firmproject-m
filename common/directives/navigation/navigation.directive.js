(function() {

    angular
        .module('app')
        .directive('navigation', navigation);

    function navigation() {
        return {
            restrict: 'EA',
            templateUrl: '/common/directives/navigation/navigation.template.html',
            controller: 'navigationController as navvm'
        };
    }

})();
