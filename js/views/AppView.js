/**
 * AppView
 *
 * Render basic layout for modules.
 *
 * @return {object}
 */

define(['backbone', 'templates/layout'], function(Backbone, Templates) {
    var AppView = Backbone.View.extend({
        template: Templates.layout,
        render: function() {
            this.$el.html(this.template(this.model));
            return this;
        }
    });
    return AppView;
});
