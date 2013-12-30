/**
 * ContentView
 *
 * @return {object}
 */

define(['backbone', 'templates/content', 'css!styles/content.css'], function(Backbone, Templates) {
    var ContentView = Backbone.View.extend({
        events: {
            'drop #content'    : '_handleFileSelect',
            'dragover #content': '_handleDragOver'
        },

        initialize: function(){
            $.event.props.push('dataTransfer');
        },

        template: Templates.content,
        render: function() {
            this.$el.html(this.template(this.model));
            return this;
        },

        _handleFileSelect: function(evt) {
            evt.stopPropagation();
            evt.preventDefault();

            var files = evt.dataTransfer.files;
            // Only process one file once.
           if(files[0].type !== '' && !files[0].type.match('text.*')) {
               // Create alert box.
               this._createAlertBox('The selected file (' + files[0].name + ' - ' + files[0].type + ') should be a text.');
           } else {
               var reader = new FileReader();
               reader.onload = function(evt) {
                   var textEle = $('<pre>'+this.result+'</pre>');
                   $('#content').html(textEle);
               };
               reader.readAsText(files[0]);
           }
        },

        _handleDragOver: function(evt) {
            evt.stopPropagation();
            evt.preventDefault();
            evt.dataTransfer.dropEffect = 'copy'; // Explicitly show this is a copy.
        },

        _createAlertBox: function(msg) {
            var e = $('<div class="alert alert-warning fade in" style="z-index: 1; position: fixed; left: 25%; top: 30%; width: 50%;"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">x</button><h4>'+ msg +'</h4></div>');
            $('body').prepend(e);
        }
    });
    return ContentView;
});
