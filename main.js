// Initialization
function main() {
    'use strict';

    // Page layout is set up in index.html
    // Just invoke controllers to create views of modules.

    var Controller1 = BackboneMVC.Controller.extend({
        name: 'ctrl1', /* the only mandatory field */

        /**
         * This is a standard action method, it is invoked
         * automatically if url matches
         */
        hello: function(){
            console.log('hello world!');
        },

        helloInChinese: function(){
            //you can invoke any method in this controller (including the private methods for sure)
            this._privateMethod();
        },

        /**
         * This function will remain untouched, the router cannot see
         * this method
         */
        _privateMethod: function(){
            console.log('你好世界!');
        }
    });
    var router = new BackboneMVC.Router(); //Start the new automatic router
    Backbone.history.start(); //We still call Backbone's default component here
}

// Add event listeners once the DOM has fully loaded by listening for the
// DOMContentLoaded` event on the document, and adding your listeners to
// specific elements when it triggers.
document.addEventListener('DOMContentLoaded', function() {
    main();
});
