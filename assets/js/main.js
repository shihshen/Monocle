// Set up module management
requirejs.config({
    //By default load any component from assets
    baseUrl: 'assets',
    //except, if the component starts with "app",
    //load it from the js/app directory. paths
    //config is relative to the baseUrl, and
    //never includes a ".js" extension since
    //the paths config could be for a directory.
    paths: {
        // Plugins
        'jquery': 'js/lib/jquery-1.7.2.min',
        'underscore': 'js/lib/underscore-min',
        'backbone': 'js/lib/backbone-min',
        'backbone-mvc': 'js/lib/backbone-mvc',
        'css': 'js/lib/css',
        'hbs': 'js/lib/hbs'
    },
    shim: {
        'backbone': ['jquery', 'underscore'],
        'backbone-mvc': ['jquery', 'underscore', 'backbone']
    }
});

require(['backbone', 'backbone-mvc', 'js/controllers/AppCtrl'], function(_Backbone, _BackboneMVC, AppCtrl) {
    $(document).ready(function() {
    // Just invoke controllers to create whole app.
    //Start the new automatic router.
    var router = new BackboneMVC.Router();
    //We still call Backbone's default component here
    Backbone.history.start();
    var appCtrl = new AppCtrl();
    });
});
