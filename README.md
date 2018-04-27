# RealtimeNgTable

We are going to  be creating a realtime table, where we don’t need to refresh our page or component anytime there’s a change to our table’s data, our table should immediately update based on the current state of the data.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

* [Download](https://nodejs.org/en/download/) Node and npm 
* [angular cli](https://github.com/angular/angular-cli) `npm install -g @angular/cli`
* `npm install` to install all our node dependencies 


## Development server

* Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
* Run `npm run server` it follows [Twelve-Factor](https://12factor.net/) for handling environment variables listed below
  * `PUSHER_APPID`
  * `PUSHER_KEY`
  * `PUSHER_SECRET`
  * `PUSHER_CLUSTER`
e.g `PUSHER_APPID=[appId] npm run server` then http://localhost:2000/employee (supports `POST`, `GET`, `DELETE`)


## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Deployment
Using `gh-pages` to host our angular app. Run `npm run deploy` to build and send to gh-pages  


## Built With

* [Pusher](https://pusher.com/) - APIs to enable devs building realtime features
* [Angular](https://angular.io/) - Frontend framework that makes it easy to build  application with the web
* [Express](https://expressjs.com/) - Used for our APIs server

