import angular from 'angular';

export default function(ngModule, config){

  var controllerName = config.ngxDirective.controllerName;

  ngModule.controller(controllerName, ngxDirectiveController);

  function ngxDirectiveController() {
  }

  ngxDirectiveController.$inject = [];

};



