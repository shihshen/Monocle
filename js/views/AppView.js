/**
 * AppView
 *
 * Render basic layout and modules.
 * @class
 * @return {object}
 */

define(['backbone', 'templates/layout', 'css!styles/app.css'], function(Backbone, Templates) {
    var AppView = Backbone.View.extend({
        template: Templates.layout,
        render: function() {
            this.$el.html(this.template({data: this.model.toJSON()}));
            return this;
        }
    });
    return AppView;
});
