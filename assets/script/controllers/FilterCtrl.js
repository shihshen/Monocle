/**
 * AppCtrl load configurations, and then create AppView instance to initalize basic layout for the views of the modules and create every view instance.
 *
 * Usage: var appCtrl = new AppCtrl();
 * @return {object}
 */

define(['jquery', 'backbone', 'backbone-mvc', 'views/AppView'], function() {
    var AppCtrl = BackboneMVC.Controller.extend({
        name: 'AppCtrl',
        /* the only mandatory field */

        initialize: function() {
            $.ajax({
                url: 'conf/layout.json'
            }).done(function(data) {
                var layout = JSON.parse(data);
                var appView = new AppView({
                    el: $('body')
                });
            });
        },

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
    return AppCtrl;
});
