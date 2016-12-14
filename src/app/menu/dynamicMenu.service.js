(function() {
    'use strict';

    angular
        .module('menu')
        .service('dynamicMenuService', dynamicMenuService);

    /* @ngInject */
    function dynamicMenuService() {
        this.dynamicMenu = {
            showDynamicMenu: false
        };
    }
})();