(function() {
    'use strict';

    angular
        .module('triangular.components')
        .controller('RightSidenavController', RightSidenavController);

    /* @ngInject */
    function RightSidenavController($scope, $http, $mdSidenav, $state,$log,$rootScope,service,$sce) {
        var vm = this;
        // sets the current active tab
            vm.close = close;
            vm.currentTab = 0;
//         $scope.close = function () {
//            $rootScope.lockLeft = false;
//          };

                console.log("rightside nav");
                $scope.city='All';
                $scope.timeperiod='Mar 16';
                $scope.modeltype='All';
                $scope.monthlymodeltype="";
                $scope.fueltype='All';
                $scope.cityarray=[];
                $scope.timearray=[];
                $rootScope.modelseleted=[];
                $rootScope.fuelselected=[];
                $rootScope.cityseleted=[];
                $rootScope.timeperiodselected=[];

            $scope.filterReset=function(){
                  $scope.fueltoggleAll();
                  $scope.toggleAll();
            };
        
        
//    $rootScope.checkboxInitiliser();
        
        



        // add an event to switch tabs (used when user clicks a menu item before sidebar opens)
        $scope.$on('triSwitchNotificationTab', function($event, tab) {
            vm.currentTab = tab;
        });


        function close() {
            $mdSidenav('notifications').close();
        }
    }
})();
