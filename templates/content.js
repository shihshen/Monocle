define(['handlebars'], function(Handlebars) {

this["JST"] = this["JST"] || {};

this["JST"]["content"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div id=\"content\">\n    <div class=\"drop-message\">\n        <h2>Drag and drop log files here.<br><br><br><br><br><br><br><br></h2>\n    </div>\n</div>\n";
  });

return this["JST"];

});