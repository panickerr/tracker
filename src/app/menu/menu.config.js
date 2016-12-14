(function() {
    'use strict';

    angular
        .module('menu')
        .config(moduleConfig);

    /* @ngInject */
    function moduleConfig( $stateProvider, triMenuProvider) {

        $stateProvider
        .state('triangular.menu-dynamic', {
            url: '/menu/dynamic',
            controller: 'MenuDynamicController',
            controllerAs: 'vm',
            templateUrl: 'app/menu/dynamic.tmpl.html'
        })
                
        
        
       
        //page1
        .state('triangular.page1', {
            url: '/page1',
            templateUrl: 'app/module1/page1/page1.tmpl.html',
            controller: 'm1page1Controller',
            controllerAs: 'vm'
        })
        
            //page 1.0
        .state('triangular.page1_0', {
            url: '/page1_0',
            views: {
                '': {
                   templateUrl: 'app/module1/page1_0/page1_0.tmpl.html',
                    controller: 'm1page1_0Controller',
                    controllerAs: 'vm'
                },
                'belowContent': {
                    templateUrl: 'app/module1/page1_0/fab-button.tmpl.html',
                    controller: 'SalesFabController',
                    controllerAs: 'vm'
                }
            }
            
        })
        
        
        
        //page 1.1
        .state('triangular.page1_1', {
            url: '/page1_1',
            templateUrl: 'app/module1/page1_1/page1_1.tmpl.html',
            controller: 'm1page1_1Controller',
            controllerAs: 'vm'
        })
        
        
        
        //page 1.1.1
      .state('triangular.page1_1_1', {
            url: '/page1_1_1',
            templateUrl: 'app/module1/page1_1_1/page1_1_1.tmpl.html',
            controller: 'm1page1_1_1Controller',
            controllerAs: 'vm'
        })
        
        
        //page2
        .state('triangular.page2', {
            url: '/page2',
            templateUrl: 'app/module1/page2/page2.tmpl.html',
            controller: 'm1page2Controller',
            controllerAs: 'vm'
        })
         //page2_1
        .state('triangular.page2_1', {
            url: '/page2_1',
            templateUrl: 'app/module1/page2_1/page2_1.tmpl.html',
            controller: 'm1page2_1Controller',
            controllerAs: 'vm'
        })
         //page2_1_1
        .state('triangular.page2_1_1', {
            url: '/page2_1_1',
            templateUrl: 'app/module1/page2_1_1/page2_1_1.tmpl.html',
            controller: 'm1page2_1_1Controller',
            controllerAs: 'vm'
        })
         //page2_1_1_1
        .state('triangular.page2_1_1_1', {
            url: '/page2_1_1_1',
            templateUrl: 'app/module1/page2_1_1_1/page2_1_1_1.tmpl.html',
            controller: 'm1page2_1_1_1Controller',
            controllerAs: 'vm'
        })
        
        
        //page3
        .state('triangular.page3', {
            url: '/page3',
            templateUrl: 'app/module1/page3/page3.tmpl.html',
            controller: 'm1page3Controller',
            controllerAs: 'vm'
        })
        //page3_1
        .state('triangular.page3_1', {
            url: '/page3_1',
            templateUrl: 'app/module1/page3_1/page3_1.tmpl.html',
            controller: 'm1page3_1Controller',
            controllerAs: 'vm'
        })
        //page3_1_1
        .state('triangular.page3_1_1', {
            url: '/page3_1_1',
            templateUrl: 'app/module1/page3_1_1/page3_1_1.tmpl.html',
            controller: 'm1page3_1_1Controller',
            controllerAs: 'vm'
        })
        //page3_1_1_1
        .state('triangular.page3_1_1_1', {
            url: '/page3_1_1_1',
            templateUrl: 'app/module1/page3_1_1_1/page3_1_1_1.tmpl.html',
            controller: 'm1page3_1_1_1Controller',
            controllerAs: 'vm'
        })
        
        //page4
        .state('triangular.page4', {
            url: '/page4',
            templateUrl: 'app/module1/page4/page4.tmpl.html',
            controller: 'm1page4Controller',
            controllerAs: 'vm'
        })
        
        //page5
        .state('triangular.page5', {
            url: '/page5',
            templateUrl: 'app/module1/page5/page5.tmpl.html',
            controller: 'm1page5Controller',
            controllerAs: 'vm'
        })
        
         //page6
        .state('triangular.page6', {
            url: '/page6',
            templateUrl: 'app/module1/page6/page6.tmpl.html',
            controller: 'm1page6Controller',
            controllerAs: 'vm'
        })
       
        
        
        
        
       
        //page1
        .state('triangular.m2page1', {
            url: '/m2page1',
            templateUrl: 'app/module2/page1/page1.tmpl.html',
            controller: 'm2page1Controller',
            controllerAs: 'vm'
        })
        
        //page2
        .state('triangular.m2page2', {
            url: '/m2page2',
            templateUrl: 'app/module2/page2/page2.tmpl.html',
            controller: 'm2page2Controller',
            controllerAs: 'vm'
        })
        
        //page3
        .state('triangular.m2page3', {
            url: '/m2page3',
            templateUrl: 'app/module2/page3/page3.tmpl.html',
            controller: 'm2page3Controller',
            controllerAs: 'vm'
        })
        
        //page4
        .state('triangular.m2page4', {
            url: '/m2page4',
            templateUrl: 'app/module2/page4/page4.tmpl.html',
            controller: 'm2page4Controller',
            controllerAs: 'vm'
        })
        
        //page5
        .state('triangular.m2page5', {
            url: '/m2page5',
            templateUrl: 'app/module2/page5/page5.tmpl.html',
            controller: 'm2page5Controller',
            controllerAs: 'vm'
        })
       
        
        
        ;
        
    }
})();