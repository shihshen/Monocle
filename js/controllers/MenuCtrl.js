/**
 * MenuCtrl
 *
 * @return {object}
 */

define(['backbone-mvc', 'jquery', 'loglevel'], function(BackboneMVC, $, log) {
    var MenuCtrl = BackboneMVC.Controller.extend({
        name: 'MenuCtrl',
        /* the only mandatory field */

        model: {}, // Store layout, modules and controllers
        view : {}, // Render layout

        initialize: function() {
        }
    });
    return MenuCtrl;
});
