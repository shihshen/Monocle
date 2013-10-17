/**
 * AppCtrl load configurations, and then create appView, appModel instance to initalize basic layout for the views of the modules and create every controller instance.
 *
 * Usage: var appCtrl = new AppCtrl();
 * @return {object}
 */

define(['backbone', 'backbone-mvc', 'script/views/AppView'], function() {
    var AppCtrl = BackboneMVC.Controller.extend({
        name: 'AppCtrl',
        /* the only mandatory field */

        constructor: function() {
            $.ajax({
                url: 'conf/layout.json'
            }).done(function(data) {
                // Load config.
                var layout = JSON.parse(data);
                var AppModel = Backbone.Model.extend(layout);
                var appModel = new AppModel();
                var appView = new AppView({
                    model: appModel,
                    el: $('body')
                });
                //appView.render();

                // Create views for every module.


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
