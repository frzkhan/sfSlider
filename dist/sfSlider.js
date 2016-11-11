angular.module('templates', []).run(['$templateCache', function($templateCache) {$templateCache.put('src/templates/sfSlider.html','<div class="form-group {{form.htmlClass}}">\n  <label class="control-label {{form.labelHtmlClass}}" ng-show="showTitle()">{{form.title}}</label>\n  <slider ng-model="$$value$$" ticks="form.keys"\n  ng-model-options="form.ngModelOptions"\n  sf-changed="form"\n  min="form.min" max="form.max"\n  ticks-labels="form.values" tooltip="hide"></slider>\n  <span class="help-block"  sf-message="form.description"></span>\n\n</div>\n');}]);
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
