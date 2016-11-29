(function() {


    angular
        .module('app')
        .controller('profileController', profileController);

    profileController.$inject = ['$location', appData];

    function profileController($location, appData) {
        var vm = this;

        vm.user = {};

        appData.getProfile()
            .success(function(data) {
                vm.user = data;
            })
            .error(function(e) {
                console.log(e);
            });
    }
})();
