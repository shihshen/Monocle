// Set up module management
requirejs.config({
    //By default load any module IDs from js/lib
    baseUrl: 'assets/js',
    //except, if the module ID starts with "app",
    //load it from the js/app directory. paths
    //config is relative to the baseUrl, and
    //never includes a ".js" extension since
    //the paths config could be for a directory.
    paths: {
        // domReady plugin for requirejs
        domReady: 'vender/domReady',
        jquery: 'vender/jquery-1.7.2.min',
        underscore: 'vender/underscore-min',
        backbone: 'vender/backbone-min',
        'backbone-mvc': 'vender/backbone-mvc',
        // CSS plugin for requirejs
        css: 'vender/css'
    },
    shim: {
        backbone: ['jquery', 'underscore'],
        'backbone-mvc': ['jquery', 'underscore', 'backbone']
    }
});

// Page layout is set up in index.html due to this is only for one page app.
// Just invoke controllers to create whole app.
require(['domReady', 'jquery', 'underscore', 'backbone', 'backbone-mvc', 'css!../css/vender/unsemantic-grid-responsive.css', 'css!../css/main.css'], function() {
    var Controller1 = BackboneMVC.Controller.extend({
        name: 'ctrl1',
        /* the only mandatory field */

        /**
         * This is a standard action method, it is invoked
         * automatically if url matches
         */
        hello: function() {
            console.log('hello world!');
        },

        helloInChinese: function() {
            //you can invoke any method in this controller (including the private methods for sure)
            this._privateMethod();
        },

        /**
         * This function will remain untouched, the router cannot see
         * this method
         */
        _privateMethod: function() {
            console.log('你好世界!');
        }
    });
    var router = new BackboneMVC.Router(); //Start the new automatic router
    Backbone.history.start(); //We still call Backbone's default component here
});
