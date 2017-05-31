

app.config(['$stateProvider', '$urlRouterProvider',function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/list');
    
    $stateProvider
        .state('list', {
            url: '/list',
            templateUrl: '/views/list.html'
        })
        .state('add', {
            url: '/add',
            templateUrl: '/views/add.html'
        })
        .state('edit', {
            url: '/edit',
            templateUrl: '/views/edit.html'
        });
        
}
]);