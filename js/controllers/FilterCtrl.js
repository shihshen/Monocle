/**
 * FilterCtrl
 *
 * @return {object}
 */

define(['backbone-mvc', 'jquery', 'loglevel'], function(BackboneMVC, $, log) {
    var FilterCtrl = BackboneMVC.Controller.extend({
        name: 'FilterCtrl',
        /* the only mandatory field */

        model: {}, // Store layout, modules and controllers
        view : {}, // Render layout

        initialize: function() {
        }
    });
    return FilterCtrl;
});
