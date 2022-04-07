import createAuth0Client from '@auth0/auth0-spa-js/dist/auth0-spa-js.production';
(function(angular) {

    'use strict';
    angular.module('auth0.spa', [])
        .service('createAuth0Client', function() { return createAuth0Client; } )

})(window.angular);