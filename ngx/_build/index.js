import angular from 'angular';
import config from './config';

import registerDirective from './ngx-directive.directive.js';
import registerController from './ngx-directive.controller.js';

export default function(ngModule, options){
  angular.merge(config, options);
  registerDirective(ngModule, config);
  registerController(ngModule, config);
};
