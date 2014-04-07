require(['./require.config'], function() {
    require(['backbone', 'backbone-mvc', 'js/controllers/AppCtrl', 'bootstrap', 'css!styles/bootstrap-theme.min.css', 'css!styles/bootstrap.min.css'], function(Backbone, BackboneMVC, AppCtrl) {
        $(document).ready(function() {
            // Start the new automatic router and Backbone.history.
            var router = new BackboneMVC.Router();
            Backbone.history.start();
            // Just invoke controllers to create whole app.
            new AppCtrl();
        });
    });
});
