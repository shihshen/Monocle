/**
 * AppView initalizes basic layout for the views of the modules, including place holders and div tags for every view of each module.
 *
 * @return {object}
 */

define(['backbone', 'css!styles/unsemantic-grid-responsive.css', 'css!styles/app.css'], function() {
    var AppView = Backbone.View.extend({
        initialize: function(){},
        render: function() {
                    console.log('AppView is rendering.');
        }
    });
    return AppView;
});
