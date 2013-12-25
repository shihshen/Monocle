/**
 * AppCtrl
 * Collect configuration and create mvc cells for all modules.
 *
 * @return {object}
 */

define(['backbone-mvc', 'jquery', 'loglevel', 'async', 'js/models/AppModel', 'js/views/AppView'], function(BackboneMVC, $, log, async, AppModel, AppView) {
    var AppCtrl = BackboneMVC.Controller.extend({
        name: 'AppCtrl',
        /* the only mandatory field */

        model: {}, // Store layout, modules and controllers
        view : {}, // Render layout

        initialize: function() {
            var self = this;
            log.setLevel('debug'); //TODO: remember to remove this line after fininshing developing.
            $.ajax('/misc/appConfig.json')
                .done(function(config) {
                    if(typeof config === 'string') {
                        try {
                            config = JSON.parse(config);
                        } catch(e) {
                            log.error('AppCtrl::initialize() fail to load appConfig');
                        }
                    }
                    log.info('AppCtrl::initialize() config: ');
                    log.info(config);
                    self.model = new AppModel(config);
                    self.view = new AppView({
                        model: self.model.toJSON(),
                        el: $('body')
                    });
                    self.view.render();
                })
                .fail(function() {
                    log.error('layout.json is lost.');
                })
                .then(function() {
                    // create all controllers
                    var placeHolders = self.model.get('placeHolders');
                    var i = 0;
                    async.whilst(
                        function () { return i < placeHolders.length; },
                        function (callback) {
                            var j = 0;
                            async.whilst(
                                function () { return j < placeHolders[i].modules.length; },
                                function (callback) {
                                    var controller = placeHolders[i].modules[j].controller;
                                    var id = placeHolders[i].modules[j].id;
                                    require(['js/controllers/'+controller], function(Ctrl){
                                        new Ctrl(id);
                                        j++;
                                        callback();
                                    });
                                },
                                function (err) {
                                    i++;
                                    callback();
                                }
                            );
                        },
                        function (err) {
                            log.info('AppCtrl::initialize() All controllers are created.');
                        }
                    );
                });
        },

        hello: function() {
           this._privateMethod();
        },

        _privateMethod: function() {
            console.log(this.model.attributes);
        }
    });
    return AppCtrl;
});
