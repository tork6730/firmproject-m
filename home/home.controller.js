(function() {

    angular
        .module('app')
        .controller('homeController', homeController);

    function homeController() {
        console.log('Home controller is running');
    }

})();
