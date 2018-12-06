angular.module('app', ['ui.router']);


angular.module('app').config(config);

config.$inject = [
    '$stateProvider',
    '$urlRouterProvider'
]

function config($stateProvider, $urlRouterProvider) {

    /* 
     Index Page
     user can enter ip address and channel number
    */
    var indexState = {
        name: 'index',
        url: '/index',
        templateUrl: 'app/shared/index/indexView.html',
        controller: 'IndexViewCtrl',
        controllerAs: 'indexView'
    }

    var carControlState = {
        name: 'carControl',
        url: '/control',
        templateUrl: 'app/shared/carControl/carControlView.html',
        controller: 'CarControlViewCtrl',
        controllerAs: 'carControlView',
        params: {
            channel : null,
            ip_address : null
        }
    }

    $stateProvider.state(indexState);
    $stateProvider.state(carControlState);

    //$urlRouterProvider.otherwise('/index');

    //FOR DEBUGGING DEFAULT CHANGED TO CAR CONTROL VIEW
    $urlRouterProvider.otherwise('/control');
}

angular.module('app').run(run);

run.$inject = [
    '$rootScope'
]

function run($rootScope) {
    console.log('version 1.0.0');
    $rootScope.defaultNumberChannels = 5;
    $rootScope.defaultUrl = '192.168.1.102';
}