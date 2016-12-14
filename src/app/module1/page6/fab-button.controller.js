(function() {
    'use strict';

    angular
        .module('app.module1.page6')
        .controller('SalesFabController', SalesFabController  );

    /* @ngInject */
    function SalesFabController($rootScope,$mdUtil,$mdSidenav) {
        var vm = this;
        vm.toggleNotificationsTab = toggleNotificationsTab;
        vm.openSideNav = openSideNav;
        
         function openSideNav(navID) {
//            $mdUtil.debounce(function(){
//                $mdSidenav(navID).toggle();
//            }, 300)();
        }
        
        
        function toggleNotificationsTab(tab) {
//            $rootScope.$broadcast('triSwitchNotificationTab', tab);
//            vm.openSideNav('notifications');
        }
    }
})();