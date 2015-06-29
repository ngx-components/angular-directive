![angular-express-header](https://cloud.githubusercontent.com/assets/1859381/8266502/d94e93ce-1731-11e5-9b9d-9b9e58c5369f.png)

## Angular directive

[AngularJS Express](https://github.com/angular-express/angular-express) component to add an Angular directive.

## Installation

To install the component:

```bash
$ ngx install angular-directive
```

No clue what the `ngx` command line tool is? Learn more about [AngularJS Express](https://github.com/angular-express/angular-express).

## How to use

After installing the component:

- edit directive definition object in `_build/ngx-directive.directive.js`
- edit directive controller in `_build/ngx-directive.controller.js`
- edit directive template in `template.jade`
- update the directive name and controller name in `_build/config.js`

and import the component in your Angular application:

```javascript
// Angular main module
var ngModule = angular.module('app', []);

// Import component
import c from 'components/angular-directive/_build/index';

// Instantiate component
c(ngModule, { baseUrl: 'components/angular-directive' });
```

## Component options

- `baseUrl`: Base URL that component can use to construct links
- `ngxDirective.name`: Directive name to use in Angular
- `ngxDirective.controller`: Controller name to use in Angular

## License

[MIT](LICENSE)

## Change log

### v0.1.0

- Initial version
