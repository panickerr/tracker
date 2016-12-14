(function() {
    'use strict';

    angular
        .module('app.module1.page6')
        .config(moduleConfig);

    /* @ngInject */
    function moduleConfig( $stateProvider, triMenuProvider) {

           $stateProvider
         .state('triangular.page6', {
            url: '/page6',
            views: {
                '': {
                   templateUrl: 'app/module1/page6/page6.tmpl.html',
                    controller: 'm1page6Controller',
                    controllerAs: 'vm',
                    
                },
                 'belowContent': {
                    templateUrl: 'app/module1/page6/fab-button.tmpl.html',
                    controller: 'SalesFabController',
                    controllerAs: 'vm'
                }
                 
            },
            data: {
                        layout: {
                            contentClass: 'layout-column'
                        }
                    }
            
        });
        
         triMenuProvider.addMenu({
                    name: 'Bluetooth Status',
                    icon: 'zmdi zmdi-bluetooth',
                    type: 'link',
                    priority: 1.3,
                    state: 'triangular.page6',
                });
                
                
    }
})();