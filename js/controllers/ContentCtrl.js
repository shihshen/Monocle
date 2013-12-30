/**
 * ContentCtrl
 *
 * @return {object}
 */

define(['backbone-mvc', 'jquery', 'loglevel', 'js/views/ContentView'], function(BackboneMVC, $, log, ContentView) {
    var ContentCtrl = BackboneMVC.Controller.extend({
        name: 'ContentCtrl',
        /* the only mandatory field */

        model: {}, // Store log
        view : {}, // Render layout

        initialize: function(domId) {
            var self = this;
            self.view = new ContentView({
                el: $('#'+domId)
            });
            self.view.render();
        }
    });
    return ContentCtrl;
});
