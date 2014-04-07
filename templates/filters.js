define(['handlebars'], function(Handlebars) {

this["JST"] = this["JST"] || {};

this["JST"]["filters"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, stack2, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  
  return "glyphicon-check";
  }

function program3(depth0,data) {
  
  
  return "glyphicon-unchecked";
  }

function program5(depth0,data) {
  
  var buffer = "", stack1, stack2;
  buffer += "\n        <a id=\"filter-"
    + escapeExpression(((stack1 = ((stack1 = data),stack1 == null || stack1 === false ? stack1 : stack1.index)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" class=\"filter list-group-item movable\">\n            <span class=\"glyphicon ";
  stack2 = helpers['if'].call(depth0, depth0.enable, {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\"></span>\n            <span style=\"color:";
  if (stack2 = helpers.color) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.color; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + ";\">Matches \"";
  if (stack2 = helpers.matchesString) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.matchesString; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\"";
  stack2 = helpers['if'].call(depth0, depth0.caseSensitive, {hash:{},inverse:self.noop,fn:self.program(6, program6, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  stack2 = helpers['if'].call(depth0, depth0.enable, {hash:{},inverse:self.noop,fn:self.program(8, program8, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "</span>\n            <span class=\"pull-right\">\n                "
    + "\n                <span id=\"remove-filter-"
    + escapeExpression(((stack1 = ((stack1 = data),stack1 == null || stack1 === false ? stack1 : stack1.index)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" class=\"glyphicon glyphicon-remove-circle remove-filter\"></span>\n            </span>\n        </a>\n        ";
  return buffer;
  }
function program6(depth0,data) {
  
  
  return " ( case sensitive )";
  }

function program8(depth0,data) {
  
  var buffer = "", stack1;
  buffer += " ( ";
  if (stack1 = helpers.matches) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.matches; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " / ";
  if (stack1 = helpers.total) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.total; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " )";
  return buffer;
  }

  buffer += "<div class=\"panel panel-default panel-filters\">\n    <div id=\"color-picker-container\"></div>\n    <div class=\"panel-heading\">\n        <div class=\"panel-title\">\n            <a id=\"toggle-filters\" href=\"#all-filters\" data-toggle=\"collapse\">\n                <span id=\"toggle-arrow\" class=\"glyphicon glyphicon-collapse-down\"></span>\n            </a>\n        </div>\n        <a title=\"Add a filter\" class=\"filter-menu\" href=\"##\"><span data-toggle=\"collapse\" data-target=\"#add-filter\" class=\"glyphicon glyphicon-plus-sign\"></span> </a>\n        <a id=\"import-filter\" title=\"Import Filters\" class=\"filter-menu\" href=\"##\"><span class=\"glyphicon glyphicon-import\"></span> </a>\n        <input type=\"file\" id=\"select-file\" class=\"hidden\"/>\n        <a title=\"Export Filters\" class=\"filter-menu\" href=\"#FiltersCtrl/exportFilters\"><span class=\"glyphicon glyphicon-export\"></span> </a>\n        <a id=\"filtered-only\" class=\"pull-right cursor-pointer\"><span class=\"glyphicon ";
  stack2 = helpers['if'].call(depth0, ((stack1 = depth0.state),stack1 == null || stack1 === false ? stack1 : stack1.showOnlyFilteredLines), {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\"></span> Show Only Filtered Lines</a>\n    </div>\n    <div id=\"all-filters\" class=\"list-group panel-body collapse in scrollable\">\n        <form id=\"add-filter\" class=\"collapse\">\n            <div class=\"input-group\">\n                <span class=\"input-group-addon\">Matches:</span>\n                <input type=\"text\" class=\"form-control\" placeholder=\"String\">\n                <span class=\"input-group-addon\">\n                    <input type=\"checkbox\">case sensitive\n                </span>\n                <span class=\"input-group-addon\">\n                    <input id=\"color-picker\" name=\"color-picker\" type=\"text\" value=\"#333399\" />\n                </span>\n                <input class=\"btn btn-default pressable\" type=\"submit\" value=\"Add\">\n                <button id=\"cancel-add\" class=\"btn btn-default pressable\" type=\"button\"><span class=\"glyphicon glyphicon-remove\"></span> </button>\n            </div>\n        </form>\n        ";
  stack2 = helpers.each.call(depth0, depth0.data, {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n    </div>\n</div>\n";
  return buffer;
  });

return this["JST"];

});