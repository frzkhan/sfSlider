angular.module('templates', []).run(['$templateCache', function($templateCache) {$templateCache.put('src/templates/sfSlider.html','<div>\n<!-- Surrounding DIV for sfField builder to add a sfField directive to. -->\n\n  <h2>{{form.myOwnFormOption}}</h2>\n  <!-- Create your own form options -->\n\n  <label>{{form.title}}</label>\n  <slider sf-field-model ticks="form.keys" min="form.min" max="form.max" ticks-labels="form.values" tooltip="hide"></slider>\n  <!-- sf-field-model let\'s the ngModel builder know that you want a ng-model that matches against the form key here -->\n  <!-- schema-validate="form" validates the form against the schema -->\n\n  <span sf-message="form.description"></span>\n  <!-- Description & Validation messages -->\n\n</div>\n');}]);
angular.module('sfSlider', [
  'schemaForm',
  'templates'
]).config(function(schemaFormDecoratorsProvider, sfBuilderProvider) {

  schemaFormDecoratorsProvider.defineAddOn(
    'bootstrapDecorator',           // Name of the decorator you want to add to.
    'sfSlider',                      // Form type that should render this add-on
    'src/templates/sfSlider.html',  // Template name in $templateCache
    sfBuilderProvider.stdBuilders   // List of builder functions to apply.
  );

});
