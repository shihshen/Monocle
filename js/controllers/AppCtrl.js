/**
 * AppCtrl
 * Collect configuration and create mvc cells for all modules.
 *
 * @return {object}
 */

define(['backbone-mvc', 'js/models/AppModel'], function(BackboneMVC, AppModel) {
    var AppCtrl = BackboneMVC.Controller.extend({
        name: 'AppCtrl',
        /* the only mandatory field */

        model: {}, // Store layout and modules

        initialize: function() {
            var layout = {placeHolders:[]};
            // Collect info. from basic html layout.
            var divsOnLayout = $('body').children();
            for(var i = 0; i < divsOnLayout.length; i++) {
                layout.placeHolders.push({id: divsOnLayout.eq(i).attr('id'), modules: []});
                var children = divsOnLayout.eq(i).children();
                for(var j = 0; j < children.length; j++) {
                    layout.placeHolders[i].modules.push({id: children.eq(j).attr('id'), controller: children.eq(j).attr('controller')});
                }
            }

            this.model = new AppModel(layout);
            // Create controllers for all modules
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
