(function () {
    'use strict';

    angular
            .module('app.module1.page6')
            .controller('m1page6Controller', m1page6Controller);

    /* @ngInject */
    function m1page6Controller($scope, service, $http, $rootScope,$timeout) {
//        $rootScope.monthlycheckboxInitiliser();
        $rootScope.toolbarname="Bluetooth Bay Status";
        var vm = this;
        $rootScope.lockLeft = false;
         $rootScope.sessionid == '1001';
            $scope.intervalFunction = function(){
                    $timeout(function() {
                    $scope.getData();
                    $scope.intervalFunction();
                    }, 30000)
                    };
          $scope.intervalFunction();
         
        
         
         $scope.getData=function(){
           service.mastersrv("AutoScopeAnalytics-baycounts").then(function (response) {
                    $rootScope.data1=response.data;
                    
                    console.log('$rootScope.data1',$rootScope.data1);  
                    console.log('$rootScope.data1',$rootScope.data1.SB);
                    console.log('$rootScope.data1',$rootScope.data1.PA);
                    console.log('$rootScope.data1',$rootScope.data1);console.log('$rootScope.data1',$rootScope.data1);
         
         
        $scope.scanned =$rootScope.data1.PA;
        $scope.arscanned = [];
        for (var i = 0; i < parseInt($scope.scanned) ; i++) {
            $scope.arscanned.push(i);
        }
        $scope.service =$rootScope.data1.SB;
        $scope.arservice = [];
        for (var i = 0; i < parseInt($scope.service) ; i++) {
            $scope.arservice.push(i);
        }
        
        $scope.body =$rootScope.data1.BS;
        $scope.arbody = [];
        for (var i = 0; i < parseInt($scope.body) ; i++) {
            $scope.arbody.push(i);
        }
        $scope.quality =$rootScope.data1.QA;
        $scope.arquality = [];
        for (var i = 0; i < parseInt($scope.quality) ; i++) {
            $scope.arquality.push(i);
        }
        $scope.test =$rootScope.data1.TD;
        $scope.artest = [];
        for (var i = 0; i < parseInt($scope.test) ; i++) {
            $scope.artest.push(i);
        }
        $scope.wash =$rootScope.data1.WA;
        $scope.arwash = [];
        for (var i = 0; i < parseInt($scope.wash) ; i++) {
            $scope.arwash.push(i);
        }
        $scope.ready =0;
        $scope.arready = [];
        for (var i = 0; i < parseInt($scope.ready) ; i++) {
            $scope.arready.push(i);
        }

        $scope.headingss="Tracking Vehicles";
        $scope.boxa1=$rootScope.boxa1;
        $scope.boxa2=$rootScope.boxa2;
        $scope.boxa3=$rootScope.boxa3;
        $scope.boxa3num=4.4;
        $scope.boxa3hrs='hrs';
        $scope.typechart="vehicleinflow";
        
      });  
         }
         
       
         
         
        
    }
})();

