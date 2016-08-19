angular.module('sfSlider', [
  'schemaForm',
  'templates',
  'ui.bootstrap-slider'
]).config(function(schemaFormDecoratorsProvider, sfBuilderProvider, schemaFormProvider, sfPathProvider) {
  schemaFormDecoratorsProvider.defineAddOn(
    'bootstrapDecorator',           // Name of the decorator you want to add to.
    'sfSlider',                      // Form type that should render this add-on
    'src/templates/sfSlider.html',  // Template name in $templateCache
    sfBuilderProvider.stdBuilders   // List of builder functions to apply.
  );
});
