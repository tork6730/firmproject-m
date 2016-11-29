(function() {


    angular
        .module('app')
        .controller('loginController', loginController);

    loginController.$inject = ['$location', 'authentication'];

    function loginController($location, authentication) {
        var vm = this;

        vm.credentials = {
            email: "",
            password: ""
        };

        vm.onSubmit = function() {
            authentication
                .login(vm.credentials)
                .error(function(err) {
                    alert(err);
                })
                .then(function() {
                    $location.path('profile');
                });
        };

    }
})();
