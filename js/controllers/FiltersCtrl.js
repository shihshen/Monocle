/**
 * FiltersCtrl
 *
 * @return {object}
 */

define(['backbone-mvc', 'jquery', 'loglevel', 'js/models/FiltersCollection', 'js/views/FiltersView', 'js/libs/storage', 'FileSaver'], function(BackboneMVC, $, log, FiltersCollection, FiltersView, storage) {
    var FiltersCtrl = BackboneMVC.Controller.extend({
        name: 'FiltersCtrl',
        /* the only mandatory field */

        model: {}, // Store all filters
        view: {}, // Render layout

        // Currently, use storage to store filters model data to share filters.(filters model data could be not too big.)
        // A centralize model management is a common way to share models, but I would like to find some way else to do so.
        filtersInStorage: 'filtersModelData',

        initialize: function(domId) {
            this.model = new FiltersCollection([]);
            this.view = new FiltersView({
                el: $('#' + domId),
                model: this.model
            });
            this.view.render();
            storage[this.filtersInStorage] = JSON.stringify(this.model.toJSON());
            storage.showOnlyFilteredLines = this.view.showOnlyFilteredLines;
            window.location.replace('#ContentCtrl/setFiltersDataLocation/' + this.filtersInStorage);
            return this;
        },

        /**
         * Add a filter and notify filtersView and contentView
         *
         * @method addAFilter
         * @params {string} filter The stringified filter
         */
        addAFilter: function(filter) {
            this.model.push(JSON.parse(filter));
            this.view.render();
            // Store filters model data in storage for content to render view, too.
            // Due to localStorage can only store strings, so currently copy filter model data to storage.
            // It's better to find another way to share models between modules.
            storage[this.filtersInStorage] = JSON.stringify(this.model.toJSON());

            window.location.replace('#ContentCtrl/updateWithFiltersFS');
            return this;
        },

        /**
         * Export filters
         *
         * @method exportFilters
         */
        exportFilters: function() {
            var blob = new Blob([JSON.stringify(this.model.toJSON())], {
                type: 'text/plain;charset=utf-8'
            });
            window.saveAs(blob, 'filters.json');
            window.location.replace('##');
            return this;
        },

        /**
         * Remove a filter and notify filtersView and contentView
         * @method removeAFilter
         * @params {string} index The index of the filter
         */
        removeAFilter: function(index) {
            this.model.remove(this.model.at(index));
            this.view.render();

            storage[this.filtersInStorage] = JSON.stringify(this.model.toJSON());

            window.location.replace('#ContentCtrl/updateWithFiltersFS');
            return this;
        },

        /**
         * Enable/disable a filter and notify filtersView and contentView
         * @method toggleAFilter
         * @params {string} index The index of the filter
         */
        toggleAFilter: function(index) {
            var theModel = this.model.at(index);
            theModel.set('enable', !theModel.get('enable'));
            this.view.render();

            storage[this.filtersInStorage] = JSON.stringify(this.model.toJSON());

            window.location.replace('#ContentCtrl/updateWithFiltersFS');
            return this;
        },

        /**
         * Ask content to rerender after enable/disable "Show Only Filtered Lines"
         * @method toggleAShowOnlyFilteredLines
         * @params {string} only The indicator to show only filtered lines or not. It can be 'true' or 'false'.
         */
        toggleAShowOnlyFilteredLines: function(only) {
            storage.showOnlyFilteredLines = only;
            window.location.replace('#ContentCtrl/updateWithFiltersFS');
            return this;
        },

        /** Update date filters view with the counter of matches
         * @method updateWithMatchesCounter
         * @params {string} the stringified counter of matches
         */
        updateWithMatchesCounter: function(matchesCounter) {
            var counter = JSON.parse(matchesCounter);
            this.view.render(counter);
            window.location.replace('##');
            return this;
        },

        /**
         * Load user imported filter into model.
         * @method loadFilters
         * @params {string} Stringified filter which is imported by the user.
         */
        loadFilters: function(filters) {
            // It's better to implement validation for the model.
            this.model.set(JSON.parse(filters));
            this.view.render();
            storage[this.filtersInStorage] = filters;
            window.location.replace('#ContentCtrl/updateWithFiltersFS');
            return this;
        }
    });
    return FiltersCtrl;
});
