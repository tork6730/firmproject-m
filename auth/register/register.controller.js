(function() {


    angular
        .module('app')
        .controller('registerController', registerController);

    registerController.$inject = ['$location', 'authentication'];

    function registerController($location, authentication) {
        var vm = this;

        vm.credentials = {
            name: "",
            email: "",
            password: "",
            address: "",
            city: "",
            state: "",
            zipcode: "",
            contact: ""

        };

        vm.onSubmit = function() {
            authentication
                .register(vm.credentials)
                .error(function(err) {
                    alert(err);
                })
                .then(function() {
                    $location.path('profile');
                });
        };
    }
})();
