import angular from 'angular';

export default function(ngModule, config){

  var directiveName = config.ngxDirective.name;
  var controllerName = config.ngxDirective.controllerName;

  ngModule.directive(directiveName, createDirectiveDefinitionObject);

  function createDirectiveDefinitionObject() {
    return {
      restrict: 'E',
      scope: {},
      templateUrl: config.baseUrl + '/template.html',
      controller: 'controllerName'
    }
  }

  createDirectiveDefinitionObject.$inject = [];

};



