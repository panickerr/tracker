(function() {
    'use strict';

    angular
        .module('authentication')
        .controller('LoginController', LoginController);

    /* @ngInject */
    function LoginController($scope,$rootScope,$state, triSettings,service,$mdDialog) {
        var vm = this;
        $rootScope.themes = ["#EC407A","#FFC000","#6A1B9A","#00E676","#536DFE"];
        var rand = Math.floor(Math.random() * $rootScope.themes.length);
        $scope.themecolor = $rootScope.themes[rand];
        vm.triSettings = triSettings;
       
       
        console.log("loing ctrl");
       
        $rootScope.Filterarray=[];
        $rootScope.swichenable=true;
        $rootScope.nameit="CSI";
        $rootScope.csissi = true; 
        $rootScope.dataTableShow=true;
        
        
        $scope.login=function(){
            console.log("Create Data create data");
            
            
            ////////////////////////////////////////////////////////
            //page 3
           
       
            service.mastersrv("AutoScopeAnalytics-baycounts").then(function (response) {
                    console.log('baycounts',response.data[1].values);
                    $rootScope.data1=response.data[1].values;
            });
            
            
            
            
            $rootScope.sessionid = '1001';
             if($rootScope.sessionid == "1001"){
                $state.go('triangular.page6');
                }
            else{
                $state.go('triangular.page6');
                }
        }              
           


       
     
    }
})();
