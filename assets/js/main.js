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
        domReady: 'lib/domReady',
        jquery: 'lib/jquery-1.7.2.min',
        underscore: 'lib/underscore-min',
        backbone: 'lib/backbone-min',
        'backbone-mvc': 'lib/backbone-mvc',
        // CSS plugin for requirejs
        css: 'lib/css'
    },
    shim: {
        backbone: ['jquery', 'underscore'],
        'backbone-mvc': ['jquery', 'underscore', 'backbone']
    }
});

require(['domReady', 'controllers/AppCtrl'], function(domReady, AppCtrl) {
    // Just invoke controllers to create whole app.
    var router = new BackboneMVC.Router(); //Start the new automatic router
    Backbone.history.start(); //We still call Backbone's default component here
    var appCtrl = new AppCtrl();
});
