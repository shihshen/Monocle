/**
 * AppView initalizes basic layout for the views of the modules, including place holders and div tags for every view of each module.
 *
 * @return {object}
 */

define(['backbone', 'handlebars', 'templates/layout', 'css!styles/unsemantic-grid-responsive.css', 'css!styles/app.css'], function(Backbone, Handlebars) {
    var AppView = Backbone.View.extend({
        template: Handlebars.templates.layout,
        render: function() {
            this.$el.html(this.template(this.model.attributes));
            return this;
        }
    });
    return AppView;
});
