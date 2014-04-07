define(['handlebars'], function(Handlebars) {

this["JST"] = this["JST"] || {};

this["JST"]["content"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    <pre id=\"";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"";
  stack1 = helpers['if'].call(depth0, depth0.color, {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " class=\"single-log";
  stack1 = helpers['if'].call(depth0, depth0.hidden, {hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">";
  if (stack1 = helpers.string) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.string; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</pre>\n";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1;
  buffer += " style=\"color:";
  if (stack1 = helpers.color) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.color; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\"";
  return buffer;
  }

function program4(depth0,data) {
  
  
  return " hidden";
  }

function program6(depth0,data) {
  
  
  return "\n    <div class=\"drop-message\">\n        <h2>Drag and drop a text file here.</h2>\n    </div>\n";
  }

  buffer += "<div class=\"logs\">\n";
  stack1 = helpers.each.call(depth0, depth0.data, {hash:{},inverse:self.program(6, program6, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</div>\n";
  return buffer;
  });

return this["JST"];

});