// Polyfills
import 'angular2/bundles/angular2-polyfills.js';

// Angular 2
import 'angular2/platform/browser';
import 'angular2/platform/common_dom';
import 'angular2/core';
import 'angular2/router';
import 'angular2/http';

// RxJS
import 'rxjs';

import {bootstrap} from 'angular2/platform/browser';
import {HTTP_PROVIDERS} from 'angular2/http';
// include for development builds
import {ELEMENT_PROBE_PROVIDERS} from 'angular2/platform/common_dom';
// include for production builds
// import {enableProdMode} from 'angular2/core';

/*
 * Root Component
 * our top level component that holds all of our components
 */
import {Root} from './app/Root';

/*
 * Bootstrap our Angular app with a top level component `Root` and inject
 * our Services and Providers into Angular's dependency injection
 */
// enableProdMode() // include for production builds
function main() {
  return bootstrap(Root, [
    // These are dependencies of our App
    HTTP_PROVIDERS,
    ELEMENT_PROBE_PROVIDERS // remove in production
  ])
    .catch(err => console.error(err));
}

document.addEventListener('DOMContentLoaded', main);
