/**
 * AppCtrl load configurations, and then create appView, appModel and every controller instance.
 *
 * Usage: var appCtrl = new AppCtrl();
 * @return {object}
 */

define(['backbone-mvc', 'js/views/AppView', 'js/models/AppModel'], function(_BackboneMVC, AppView, AppModel) {
    var AppCtrl = BackboneMVC.Controller.extend({
        name: 'AppCtrl',
        /* the only mandatory field */

        initialize: function() {
            $.ajax({
                url: 'conf/layout.json'
            }).done(function(data) {
                // Load config.
                var layout = JSON.parse(data);

                var appModel = new AppModel(layout);
                var appView = new AppView({
                    model: appModel,
                    el: $('body')
                });
                appView.render();

                // Create controllers for every module.

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
