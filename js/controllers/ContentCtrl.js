/**
 * ContentCtrl
 *
 * @return {object}
 */

define(['backbone-mvc', 'jquery', 'loglevel'], function(BackboneMVC, $, log) {
    var ContentCtrl = BackboneMVC.Controller.extend({
        name: 'ContentCtrl',
        /* the only mandatory field */

        model: {}, // Store layout, modules and controllers
        view : {}, // Render layout

        initialize: function() {
        },
    });
    return ContentCtrl;
});
