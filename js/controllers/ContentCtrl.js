/**
 * ContentCtrl
 *
 * @class
 * @return {object}
 */
define(['backbone-mvc', 'jquery', 'loglevel', 'js/models/ContentCollection', 'js/views/ContentView', 'js/libs/storage'], function(BackboneMVC, $, log, ContentCollection, ContentView, storage) {
    var ContentCtrl = BackboneMVC.Controller.extend({
        name: 'ContentCtrl',
        /* the only mandatory field */

        model: {}, // Store logs
        view: {}, // Render layout

        // Currently, use storage to store filters model data to share filters.(filters model data could be not too big.)
        // A centralize model management is a common way to share models, but I would like to find some way else to do so.
        filtersInStorage: '',

        /** @constructor */
        initialize: function(domId) {
            this.model = new ContentCollection([]);
            this.view = new ContentView({
                el: $('#' + domId),
                model: this.model
            });
            this.view.render();
            return this;
        },

        /**
         * Set the location in storage of filters model data
         *
         * @method setFiltersDataLocation
         * @params {string} loc Location in storage
         */
        setFiltersDataLocation: function(loc) {
            this.filtersInStorage = loc;
            window.location.replace('##');
            return this;
        },

        /**
         * Load data from a storage by passing key into it and rerender.
         *
         * @method loadDataFS
         * @param {string} key - The key for content model data in storage
         */
        loadDataFS: function(key) {
            // Load data from a storage and remove immediatly.
            var contentByLines = storage[key].match(/[^\r\n]+/g);
            delete storage[key];

            this.model.reset();
            for (var i = 0; i < contentByLines.length; i++) {
                this.model.push([{
                    id: 'line' + i,
                    string: contentByLines[i]
                }]);
            }

            log.info('ContentCtrl::loadDataFS() content model data:');
            log.info(this.model.toJSON());
            log.info('ContentCtrl::loadDataFS() filters model data:');
            log.info(JSON.parse(storage[this.filtersInStorage]));
            log.info('ContentCtrl::loadDataFS() showOnlyFilteredLines state:');
            // Some browser can only store string in localStorage.
            log.info(storage.showOnlyFilteredLines);
            this.view.render(JSON.parse(storage[this.filtersInStorage]), this._stringToBoolean(storage.showOnlyFilteredLines));
            // Move to top of the window. Comment below line due to BackboneMVC's timing issue related to router detection for controllers.
            //window.location.replace('#');
            return this;
        },

        /**
         * Update content view with filters from storage.
         *
         * @method updateWithFiltersFS
         */
        updateWithFiltersFS: function() {
            log.info('ContentCtrl::updateWithFiltersFS() filters model data:');
            log.info(JSON.parse(storage[this.filtersInStorage]));
            log.info('ContentCtrl::updateWithFiltersFS() showOnlyFilteredLines state:');
            // Some browser can only store string in localStorage.
            log.info(storage.showOnlyFilteredLines);
            this.view.render(JSON.parse(storage[this.filtersInStorage]), this._stringToBoolean(storage.showOnlyFilteredLines));
            return this;
        },

        /**
         * Convert string to boolean.
         *
         * @method _stringToBoolean
         * @params str The string
         */
        _stringToBoolean: function  (str) {
            if(str === 'true') {
                return true;
            } else {
                return false;
            }
        }
    });
    return ContentCtrl;
});
