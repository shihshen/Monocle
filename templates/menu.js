define(['handlebars'], function(Handlebars) {

this["JST"] = this["JST"] || {};

this["JST"]["menu"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<nav class=\"navbar navbar-default navbar-fixed-top\" role=\"navigation\">\n    <div class=\"navbar-header\">\n        <a class=\"navbar-brand\" href=\"#\">Monocle</a>\n    </div>\n    <div class=\"collapse navbar-collapse\">\n        <ul class=\"nav navbar-nav\">\n            <li>\n                <a href=\"#\" role=\"button\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">File <b class=\"caret\"></b></a>\n                <ul class=\"dropdown-menu\" role=\"menu\" aria-labelledby=\"drop1\">\n                    <li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" href=\"#ContentCtrl/loadFile\">Open</a>\n                    </li>\n                    <li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" href=\"#bb\">Load Filters</a>\n                    </li>\n                    <li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" href=\"#bb\">Save Filters</a>\n                    </li>\n                </ul>\n            </li>\n            <li>\n                <a href=\"#\" role=\"button\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">View <b class=\"caret\"></b></a>\n                <ul class=\"dropdown-menu\" role=\"menu\" aria-labelledby=\"drop1\">\n                    <li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" href=\"#test\">Show Only Filtered Lines</a>\n                    </li>\n                </ul>\n            </li>\n            <li>\n                <a href=\"#\" role=\"button\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">Filter <b class=\"caret\"></b></a>\n                <ul class=\"dropdown-menu\" role=\"menu\" aria-labelledby=\"drop1\">\n                    <li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" href=\"#test\">Add New Filter</a>\n                    </li>\n                </ul>\n            </li>\n        </ul>\n        <ul class=\"nav navbar-nav navbar-right\">\n            <li>\n                <a href=\"https://github.com/Powpow-Shen/Monocle/\">About</a>\n            </li>\n        </ul>\n    </div>\n</nav>\n";
  });

return this["JST"];

});