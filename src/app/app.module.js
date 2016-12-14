(function() {
    'use strict';

    angular
        .module('app', [
            'ui.router', 'permission',
            'triangular',
            'ngAnimate', 'ngCookies', 'ngSanitize', 'ngMessages', 'ngMaterial',
            'googlechart', 'chart.js', 'linkify', 'ui.calendar', 'angularMoment', 'textAngular', 'uiGmapgoogle-maps', 'hljs', 'md.data.table', angularDragula(angular), 'ngFileUpload',
             'app.module1',
            // uncomment above to activate the example seed module
            'app.translate',
            // only need one language?  if you want to turn off translations
            // comment out or remove the 'app.translate', line above
            'app.permission',
            // dont need permissions?  if you want to turn off permissions
            // comment out or remove the 'app.permission', line above
            // also remove 'permission' from the first line of dependencies
            // https://github.com/Narzerus/angular-permission see here for why
//            'app.examples'
        'authentication'
        ])

//http://localhost:8084/AutoscopeAnalytics/AutoScopeAnalytics?hiddenActionType=-AutoScopeAnalytics-sameday
        // set a constant for the API we are connecting to
         .constant("URL2","http://iqs.leadicsapps.com/HMILIQS/LIAction?hiddenActionType=-")
          .constant("URL","http://localhost:8084/AutoscopeAnalytics/AutoScopeAnalytics?hiddenActionType=-")   
        .constant('API_CONFIG', {
            'url':  'http://triangular-api.oxygenna.com/'
        });
})();