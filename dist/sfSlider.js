angular.module('templates', []).run(['$templateCache', function($templateCache) {$templateCache.put('src/templates/sfSlider.html','<div class="form-group {{form.htmlClass}}">\n  <label class="control-label {{form.labelHtmlClass}}" ng-show="showTitle()">{{form.title}}</label>\n  <slider sf-field-model ticks="form.keys"\n  min="form.min" max="form.max"\n  ticks-labels="form.values" tooltip="hide"></slider>\n  <span class="help-block"  sf-message="form.description"></span>\n\n</div>\n');}]);
angular.module('sfSlider', [
  'schemaForm',
  'templates',
  'ui.bootstrap-slider'
]).config(function(schemaFormDecoratorsProvider, sfBuilderProvider, schemaFormProvider, sfPathProvider) {
  var slider = function(name, schema, options){
    var f = schemaFormProvider.stdFormObj(name, schema, options);
    if(schema.enum){
      f.keys = schema.enum.map(function (value, key) {
        return key;
      })
      f.values = schema.enum.map(function (value, key) {
        return value;
      })
    }
    options.lookup[sfPathProvider.stringify(options.path)] = f;
    return f;
  };
  schemaFormProvider.defaults.string.unshift(slider);
  schemaFormDecoratorsProvider.defineAddOn(
    'bootstrapDecorator',           // Name of the decorator you want to add to.
    'sfSlider',                      // Form type that should render this add-on
    'src/templates/sfSlider.html',  // Template name in $templateCache
    sfBuilderProvider.stdBuilders   // List of builder functions to apply.
  );
});
