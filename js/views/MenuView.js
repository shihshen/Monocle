/**
 * MenuView
 *
 * @return {object}
 */

define(['backbone', 'templates/menu', 'css!styles/menu.css'], function(Backbone, Templates) {
    var AppView = Backbone.View.extend({
        template: Templates.kicks,
        render: function() {
            this.$el.html(this.template(this.model.attributes));
            return this;
        }
    });
    return MenuView;
});
