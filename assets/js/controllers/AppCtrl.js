define(['jquery', 'underscore', 'backbone', 'backbone-mvc', 'css!../../css/unsemantic-grid-responsive.css', 'css!../../css/app.css'], function() {
    var AppCtrl = BackboneMVC.Controller.extend({
        name: 'AppCtrl',
        /* the only mandatory field */

        initialize: function() {
            $.ajax({
                url: 'conf/layout.json'
            }).done(function(data) {
                var layout = JSON.parse(data);
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
