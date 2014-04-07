/**
 * ContentView
 *
 * @class
 * @return {object}
 */
define(['backbone', 'templates/content', 'js/libs/storage', 'css!styles/compiled/content.css'], function(Backbone, Templates, storage) {
    var ContentView = Backbone.View.extend({
        events: {
            'drop .logs': '_handleFileSelect',
            'dragover .logs': '_handleDragOver'
        },

        /** @constructor */
        initialize: function() {
            $.event.props.push('dataTransfer');
            return this;
        },

        template: Templates.content,

        /**
         * Render html with content model and filters model data
         *
         * @method render
         * @params {object} filters Filters model data
         * @params {boolean} filteredLinesOnly Indicator for showing filtered lines only
         */
        render: function(filters, filteredLinesOnly) {
            // default color for unmatched string
            var DEFAULT_COLOR = '#848384',
                data = this.model.toJSON(),
                matchesCounter;
            if (filters) {
                matchesCounter = [];
                for (var k = 0; k < filters.length; k++) {
                    matchesCounter.push({
                        number: 0,
                        total: data.length
                    });
                }
                for (var i = 0; i < data.length; i++) {
                    for (var j = 0; j < filters.length; j++) {
                        var searchPattern = filters[j].matchesString;
                        if (!filters[j].caseSensitive) {
                            searchPattern = new RegExp(searchPattern, 'i');
                        }
                        if (filters[j].enable && data[i].string.search(searchPattern) !== -1) {
                            data[i].color = filters[j].color;
                            matchesCounter[j].number++;
                            break;
                        }
                    }
                    if (filters.length === 0) {
                        delete data[i].color;
                    } else {
                        // if the data doesn't match any filter
                        if (j === filters.length) {
                            data[i].color = DEFAULT_COLOR;
                            data[i].hidden = filteredLinesOnly;
                        }
                    }
                }
            }
            this.$el.html(this.template({
                data: data
            }));
            if (matchesCounter) {
                window.location.replace('#FiltersCtrl/updateWithMatchesCounter/' + encodeURIComponent(JSON.stringify(matchesCounter)));
            } else {
                window.location.replace('##');
            }
            return this;
        },

        /**
         * Read files and notice content controller to load and rerender content if users drop files here.
         *
         * @method _handleDragOver
         * @params {object} evt Event sent by the browser
         */
        _handleFileSelect: function(evt) {
            var self = this;
            evt.stopPropagation();
            evt.preventDefault();

            var files = evt.dataTransfer.files;
            // Only process one file once.
            if (files[0].type !== '' && !files[0].type.match('text.*')) {
                // Create alert box.
                this._createAlertBox('The selected file (' + files[0].name + ' - ' + files[0].type + ') should be a text.');
            } else {
                window.document.title = 'Monocle : ' + files[0].name;
                if (files[0].size > 0) {
                    var reader = new FileReader();
                    reader.onload = function() {
                        storage.fileContent = this.result;
                        window.location.replace('#ContentCtrl/loadDataFS/fileContent');
                    };
                    reader.readAsText(files[0]);
                } else {
                    this._createAlertBox('The selected file is empty. Please select another one.');
                }
            }
            return this;
        },

        /**
         * Show "+" sign to indicate the file will be copied here
         *
         * @method _handleFileSelect
         * @params {object} evt Event sent by the browser
         */
        _handleDragOver: function(evt) {
            evt.stopPropagation();
            evt.preventDefault();
            evt.dataTransfer.dropEffect = 'copy'; // Explicitly show this is a copy.
            return this;
        },

        _createAlertBox: function(msg) {
            var e = $('<div class="alert alert-warning fade in" style="z-index: 1; position: fixed; left: 25%; top: 30%; width: 50%;"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">x</button><h4>' + msg + '</h4></div>');
            $('body').prepend(e);
            return this;
        }
    });
    return ContentView;
});
