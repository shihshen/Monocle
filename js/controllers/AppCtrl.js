/**
 * AppCtrl
 *
 * Collect configuration and create mvc cells for all modules.
 * @class
 * @return {object}
 */

define(['backbone-mvc', 'jquery', 'loglevel', 'async', 'js/models/AppModel', 'js/views/AppView'], function(BackboneMVC, $, log, async, AppModel, AppView) {
    var AppCtrl = BackboneMVC.Controller.extend({
        name: 'AppCtrl',
        /* the only mandatory field */

        model: {}, // Store layout, modules and controllers
        view: {}, // Render layout

        /** @constructor */
        initialize: function() {
            var self = this;
            log.setLevel('warn'); // set log level to 'debug' to turn on all logs.
            $.ajax({
                url: 'misc/appConfig.json',
                dataType: 'json'
            })
                .done(function(config) {
                    log.info('AppCtrl::initialize() config: ');
                    log.info(config);
                    self.model = new AppModel(config);
                    self.view = new AppView({
                        model: self.model,
                        el: $('body')
                    });
                    self.view.render();
                })
                .fail(function() {
                    log.error('AppCtrl::initialize() appConifg.json is lost.');
                })
                .then(function() {
                    // create all controllers
                    var placeHolders = self.model.get('placeHolders');
                    var i = 0;
                    async.whilst(
                        function() {
                            return i < placeHolders.length;
                        },
                        function(callback) {
                            var j = 0;
                            async.whilst(
                                function() {
                                    return j < placeHolders[i].modules.length;
                                },
                                function(callback) {
                                    var controller = placeHolders[i].modules[j].controller;
                                    var id = placeHolders[i].modules[j].id;
                                    require(['js/controllers/' + controller], function(Ctrl) {
                                        new Ctrl(id);
                                        j++;
                                        callback();
                                    });
                                },
                                function(err) {
                                    i++;
                                    callback();
                                }
                            );
                        },
                        function(err) {
                            log.info('AppCtrl::initialize() All controllers are created.');
                        }
                    );
                });
            return this;
        }
    });
    return AppCtrl;
});
