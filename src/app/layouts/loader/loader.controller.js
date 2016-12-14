(function() {
    'use strict';

    angular
        .module('app')
        .controller('LoaderController', LoaderController);

    /* @ngInject */
    function LoaderController(triSettings,$rootScope,$state,$scope,triLayout,$window) {
        var vm = this;
         if($rootScope.sessionid == '1001'){
                $scope.layout = triLayout.layout; //eslint-disable-line
                var vm = this;
                vm.triSettings = triSettings;
         }
        else{
//             $state.go('triangular.page1'); 
             $state.go('triangular.page6'); 
//              alert(' else else $rootScope.sessionid',$rootScope.sessionid);
        }
        
    }
})();
