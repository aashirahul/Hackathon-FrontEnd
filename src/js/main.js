import angular from 'angular';

import { routerConfig } from './routes';
// import { HomeController } from './controllers/home';
import { AddController } from './controllers/add';
// import { DetailsController } from './controllers/details';

import 'angular-ui-router';

angular
  .module('app', ['ui.router'])
  .config(routerConfig)
  // .controller('HomeController', HomeController)
  .controller('AddController', AddController)
  // .controller('DetailsController', DetailsController);
