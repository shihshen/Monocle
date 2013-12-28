/**
 * MenuView
 *
 * @return {object}
 */

define(['backbone', 'templates/menu', 'css!styles/menu.css'], function(Backbone, Templates) {
    var MenuView = Backbone.View.extend({
        template: Templates.menu,
        render: function() {
            this.$el.html(this.template(this.model));
            return this;
        }
    });
    return MenuView;
});
