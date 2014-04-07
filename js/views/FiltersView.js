/**
 * FiltersView
 *
 * Render basic layout for modules.
 * @class
 * @return {object}
 */

define(['backbone', 'templates/filters', 'loglevel', 'colorPicker', 'css!styles/compiled/filters.css', 'css!styles/colorPicker.css'], function(Backbone, Templates, log, colorPicker) {
    var FiltersView = Backbone.View.extend({
        events: {
            'click #toggle-filters': '_changeArrow',
            'click #cancel-add': '_cancelAdd',
            'submit #add-filter': '_addFilter',
            'click #import-filter': '_importFilter',
            'change #select-file:file': '_parseFilter',
            'click .remove-filter': '_removeFilter',
            'mouseenter .pressable': '_showPressableBC',
            'mouseleave .pressable': '_removePressableBC',
            'click #filtered-only': '_toggleShowOnlyFilteredLines',
            'click .filter': '_toggleEnableFilter'
        },

        showOnlyFilteredLines: false,

        template: Templates.filters,
        render: function(matchesCounter) {
            var self = this,
                data = this.model.toJSON();
            if (matchesCounter) {
                for (var i = 0; i < matchesCounter.length; i++) {
                    data[i].matches = matchesCounter[i].number;
                    data[i].total = matchesCounter[i].total;
                }
            }
            this.$el.html(this.template({
                data: data,
                state: {
                    showOnlyFilteredLines: this.showOnlyFilteredLines
                }
            }));

            // set color picker
            $('#color-picker').colorPicker({
                container: '#color-picker-container'
            });

            this._adjustBodyPaddingByEvents();

            return this;
        },

        /**
         * Adjust Body padding by events
         *
         * @method _adjustBodyPaddingByEvents
         */
        _adjustBodyPaddingByEvents: function() {
            var self = this,
                // Set padding-bottom for body to avoid overlapping with filters.
                adjustBodyPadding = function() {
                    $('body').css('padding-bottom', self.$el.children().outerHeight());
                };

            log.info('The outer height of the children of ' + this.$el.attr('id') + ' is ' + this.$el.children().outerHeight());
            // Due to browser will need some time to apply all css. Before that, the outer height of the node could be wrong.
            // So delay 1 sec. is a workaround.
            setTimeout(adjustBodyPadding, 1000);
            $('#all-filters').on('hidden.bs.collapse', adjustBodyPadding);
            $('#all-filters').on('shown.bs.collapse', adjustBodyPadding);
            return this;
        },

        /**
         * Change the arrow before Filters to indicate if the filters is collapsed or not
         *
         * @method _changeArrow
         */
        _changeArrow: function() {
            var arrowFilters = $('#toggle-arrow');
            var allFilters = $('#all-filters');
            if (allFilters.hasClass('in')) {
                arrowFilters.removeClass('glyphicon-collapse-down').addClass('glyphicon-collapse-up');
            } else if (allFilters.hasClass('collapse')) {
                arrowFilters.removeClass('glyphicon-collapse-up').addClass('glyphicon-collapse-down');
            }
            return this;
        },

        /**
         * Add one filter by sending signal to filter controller
         *
         * @method _addFilter
         * @params {object} evt Event sent by the browser
         */
        _addFilter: function(evt) {
            evt.preventDefault();
            var inputs = $('#' + evt.currentTarget.id + ' :input');
            window.location.replace('#FiltersCtrl/addAFilter/' +
                encodeURIComponent(JSON.stringify({
                    enable: true,
                    matchesString: inputs[0].value,
                    caseSensitive: $(inputs[1]).prop('checked'),
                    color: inputs[2].value
                })));
            return this;
        },

        /**
         * Import a Filter.
         *
         * @method _importFilter
         */
        _importFilter: function() {
            $('#select-file').trigger('click');
            return this;
        },

        /**
         * Parse user selected filter.
         *
         * @method _parseFilter
         * @params {object} evt Event sent by the browser
         */
        _parseFilter: function(evt) {
            if(evt.currentTarget.files.length === 1) {
                var reader = new FileReader();
                reader.onload = function() {
                    window.location.replace('#FiltersCtrl/loadFilters/' + this.result);
                };
                reader.readAsText(evt.currentTarget.files[0]);
            } else {
                // User can only select one file once. Tested on chrome.
                log.error('FiltersView:_parseFilter() ' + 'User may select more than one file');
            }
            return this;
        },

        /**
         * Remove one filter by sending signal to filter controller
         *
         * @method _removeFilter
         * @params {object} evt Event sent by the browser
         */
        _removeFilter: function(evt) {
            evt.stopPropagation();
            var index = evt.currentTarget.id.replace('remove-filter-', '');
            window.location.replace('#FiltersCtrl/removeAFilter/' + encodeURIComponent(index));
            return this;
        },

        /**
         * Check or uncheck "enable" filter
         *
         * @method _toggleEnableFilter
         * @params {object} evt Event sent by the browser
         */
        _toggleEnableFilter: function(evt) {
            var index = evt.currentTarget.id.replace('filter-', '');
            window.location.replace('#FiltersCtrl/toggleAFilter/' + encodeURIComponent(index));
            return this;
        },

        /**
         * Hide add panel for user.
         *
         * @method _cancelAdd
         * @params {object} evt Event sent by the browser
         */
        _cancelAdd: function(evt) {
            var addFilterEle = $('#add-filter');
            addFilterEle.collapse('hide');
            addFilterEle.children().children().each(function(i) {
                if (this.tagName.toLowerCase() === 'button') {
                    // Clean button background-color
                    $(this).css('background-color', '');
                }
            });
            return this;
        },

        /**
         * Show specific background color to indicate the button is pressable
         *
         * @method _showPressableBC
         * @params {object} evt Event sent by the browser
         */
        _showPressableBC: function(evt) {
            $(evt.currentTarget).css('background-color', '#CCF8CC');
            return this;
        },

        /**
         * Remove specific background color
         *
         * @method _removePressableBC
         * @params {object} evt Event sent by the browser
         */
        _removePressableBC: function(evt) {
            $(evt.currentTarget).css('background-color', '');
            return this;
        },

        /**
         * Check or uncheck "Show Only Filtered Lines" box
         *
         * @method _toggleShowOnlyFilteredLines
         * @params {object} evt Event sent by the browser
         */
        _toggleShowOnlyFilteredLines: function(evt) {
            this.showOnlyFilteredLines = !this.showOnlyFilteredLines;
            this.render();
            window.location.replace('#FiltersCtrl/toggleAShowOnlyFilteredLines/' + this.showOnlyFilteredLines);
            return this;
        }
    });
    return FiltersView;
});
