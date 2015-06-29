import angular from 'angular';
import config from './config';

import registerDirective from './ngx-directive.directive';
import registerController from './ngx-directive.controller';

export default function(ngModule, options){
  angular.merge(config, options);
  registerDirective(ngModule, config);
  registerController(ngModule, config);
};
