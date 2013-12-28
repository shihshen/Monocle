/**
 * MenuCtrl
 *
 * @return {object}
 */

define(['backbone-mvc', 'jquery', 'loglevel', 'js/views/MenuView'], function(BackboneMVC, $, log, MenuView) {
    var MenuCtrl = BackboneMVC.Controller.extend({
        name: 'MenuCtrl',
        /* the only mandatory field */

        view : {}, // Render layout

        initialize: function(domId) {
            self.view = new MenuView({
                el: $('#'+domId)
            });
            self.view.render();
        }
    });
    return MenuCtrl;
});
