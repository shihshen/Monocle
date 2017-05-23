// Set up module management
require.config({
    //By default load any component from assets
    baseUrl: '',
    urlArgs: 'version=0.2.0',
    //except, if the component starts with "app",
    //load it from the js/app directory. paths
    //config is relative to the baseUrl, and
    //never includes a ".js" extension since
    //the paths config could be for a directory.
    paths: {
        'jquery': 'js/libs/jquery-1.7.2.min',
        'underscore': 'js/libs/underscore-min',
        'backbone': 'js/libs/backbone',
        'backbone-mvc': 'js/libs/backbone-mvc',
        'handlebars': 'js/libs/handlebars.runtime',
        'bootstrap': 'js/libs/bootstrap.min',
        'loglevel': 'js/libs/loglevel.min',
        'async': 'js/libs/async',
        'colorPicker': 'js/libs/jquery.colorPicker',
        'FileSaver': 'js/libs/FileSaver',

        // Plugins
        'text': 'js/libs/text',
        'css': 'js/libs/css'
    },
    shim: {
        'underscore': {
            exports: '_'
        },
        'jquery': {
            exports: '$'
        },
        'backbone': {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        },
        'backbone-mvc': {
            deps: ['backbone'],
            exports: 'BackboneMVC'
        },
        'handlebars': {
            exports: 'Handlebars'
        },
        'bootstrap': {
            deps: ['jquery'],
            exports: 'Bootstrap'
        },
        'colorPicker': {
            deps: ['jquery'],
            exports: 'colorPicker'
        }
    }
});
