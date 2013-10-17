// Set up module management
requirejs.config({
    //By default load any component from assets
    baseUrl: 'assets',
    //except, if the component starts with "app",
    //load it from the script/app directory. paths
    //config is relative to the baseUrl, and
    //never includes a ".js" extension since
    //the paths config could be for a directory.
    paths: {
        // domReady plugin
        'domReady': 'script/lib/domReady',
        'jquery': 'script/lib/jquery-1.7.2.min',
        'underscore': 'script/lib/underscore-min',
        'backbone': 'script/lib/backbone-min',
        'backbone-mvc': 'script/lib/backbone-mvc',
        // CSS plugin
        'css': 'script/lib/css',
        // HandleBar plugin
        'hbs': 'script/lib/hbs'
    },
    shim: {
        'backbone': ['jquery', 'underscore'],
        'backbone-mvc': ['jquery', 'underscore', 'backbone']
    }
});

require(['domReady', 'script/controllers/AppCtrl'], function(domReady, AppCtrl) {
    // Just invoke controllers to create whole app.
    //Start the new automatic router.
    var router = new BackboneMVC.Router();
    //We still call Backbone's default component here
    Backbone.history.start();
    var appCtrl = new AppCtrl();
});
