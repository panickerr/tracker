(function() {
    'use strict';

    angular
        .module('menu')
        .controller('MenuDynamicController', MenuDynamicController);

    /* @ngInject */
    function MenuDynamicController(dynamicMenuService, triMenu,$rootScope,$state) {
        var vm = this;
        // get dynamic menu service to store & keep track the state of the menu status
        vm.dynamicMenu = dynamicMenuService.dynamicMenu;
        // create toggle function
            vm.toggleExtraMenu = toggleExtraMenu;
            vm.toggleExtraMenu2 = toggleExtraMenu2;
            vm.toggleExtraMenu3 = toggleExtraMenu3;
            vm.toggleExtraMenu4 = toggleExtraMenu4;
            vm.toggleExtraMenu5 = toggleExtraMenu5;
               vm.toggleExtraMenu6 = toggleExtraMenu6;
         
           vm.tempfunction = tempfunction;
       
        
        ///////////////////////////////////////////
        //////////////////////////////////////////
        tempfunction($rootScope.csissi); ////
        ////////////////////////////////////////
        ///////////////////////////////////////

         
         
        function toggleExtraMenu(showMenu) {
            if(showMenu) {
                triMenu.addMenu({
                    name: 'Study Summary',
                    icon: 'zmdi zmdi-file-text',
                    type: 'link',
                    priority: 1.0,
                     state: 'triangular.page1',
                }
                );triMenu.removeMenu('triangular.m2page1');
            }
            else {
                triMenu.removeMenu('triangular.page1');
                triMenu.addMenu({
                        name: 'Module2 Page1',
                        icon: 'zmdi zmdi-file-text',
                        type: 'link',
                        priority: 1.0,
                             state: 'triangular.m2page1',
                    });
            }
        }
        
        
         function toggleExtraMenu2(showMenu) {
         if(showMenu) {
                triMenu.addMenu({
                    name: 'Model View',
                    icon: 'zmdi zmdi-email',
                    type: 'link',
                    priority: 1.0,
                     state: 'triangular.page2',
                }
                );triMenu.removeMenu('triangular.m2page2');
            }
            else {
                triMenu.removeMenu('triangular.page2');
                triMenu.addMenu({
                        name: 'Module2 Page2',
                        icon: 'zmdi zmdi-email',
                        type: 'link',
                        priority: 1.0,
                             state: 'triangular.m2page2',
                    });
            }
          
        }
        
        
         function toggleExtraMenu3(showMenu) {
           if(showMenu) {
                triMenu.addMenu({
                    name: 'City View',
                    icon: 'zmdi zmdi-home',
                    type: 'link',
                    priority: 1.0,
                     state: 'triangular.page3',
                }
                );triMenu.removeMenu('triangular.m2page3');
            }
            else {
                triMenu.removeMenu('triangular.page3');
                triMenu.addMenu({
                        name: 'Module2 Page3',
                        icon: 'zmdi zmdi-home',
                        type: 'link',
                        priority: 1.0,
                             state: 'triangular.m2page3',
                    });
            }
          
        }
        
        
         function toggleExtraMenu4(showMenu) {
            if(showMenu) {
                triMenu.addMenu({
                    name: 'Monthly Trend',
                    icon: 'zmdi zmdi-car',
                    type: 'link',
                    priority: 1.0,
                     state: 'triangular.page4',
                }
                );triMenu.removeMenu('triangular.m2page4');
            }
            else {
                triMenu.removeMenu('triangular.page4');
                triMenu.addMenu({
                        name: 'Module2 Page4',
                        icon: 'zmdi zmdi-car',
                        type: 'link',
                        priority: 1.0,
                             state: 'triangular.m2page4',
                    });
            }
          
        }
        
         function toggleExtraMenu5(showMenu) {
           if(showMenu) {
                triMenu.addMenu({
                    name: 'Additional',
                    icon: 'zmdi zmdi-book',
                    type: 'link',
                    priority: 1.0,
                     state: 'triangular.page5',
                }
                );triMenu.removeMenu('triangular.m2page5');
            }
            else {
                triMenu.removeMenu('triangular.page5');
                triMenu.addMenu({
                        name: 'Module2 Page5',
                        icon: 'zmdi zmdi-book',
                        type: 'link',
                        priority: 1.0,
                             state: 'triangular.m2page5',
                    });
            }
          
        }
        
          function toggleExtraMenu6(showMenu) {
           if(showMenu) {
                triMenu.addMenu({
                    name: 'Fuel View',
                    icon: 'zmdi zmdi-gas-station',
                    type: 'link',
                    priority: 1.0,
                     state: 'triangular.page6',
                }
                );triMenu.removeMenu('triangular.m2page6');
            }
            else {
                triMenu.removeMenu('triangular.page5');
                triMenu.addMenu({
                        name: 'Module2 Page5',
                        icon: 'zmdi zmdi-gas-station',
                        type: 'link',
                        priority: 1.0,
                             state: 'triangular.m2page5',
                    });
            }
          
        }
        
        
        function tempfunction(showMenu){
//            showMenu=true;
            if($rootScope.reporttype){
                     
            }
        
            else{
                          if(showMenu){
                              $state.go('triangular.page1');}

                                    toggleExtraMenu(showMenu);
                                     toggleExtraMenu2(showMenu);
                                      toggleExtraMenu3(showMenu);
                                       toggleExtraMenu4(showMenu);
                                        toggleExtraMenu5(showMenu);
                                        toggleExtraMenu6(showMenu);
                                        
                                    
            }
        }
    }
})();