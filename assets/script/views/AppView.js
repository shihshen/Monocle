/**
 * AppView initalizes basic layout for the views of the modules, including place holders and div tags for every view of each module.
 *
 * @return {object}
 */

define(['backbone', 'css!style/unsemantic-grid-responsive.css', 'css!style/app.css'], function() {
    var AppView = Backbone.View.extend({
        constructor: function() {
        }
    });
    return AppView;
});
