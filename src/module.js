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
