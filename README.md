- npm install
- npm start
- npm run watch
- go to localhost:2016

These helped with me getting up and running with Angular 1.5 (have been in 1.3 land for a while).

Basic setup and file structure:
https://github.com/kitconcept/webpack-starter-angular/

Component parent to child state propagation. Supposedly should be easy to switch to Angular 2's flux architecture:
http://dfsq.info/site/read/angular-components-communication

Ideally in the component tags in app.html you should see all the parameters the component needs. In the component definition these should be bound with one way bindings '<' (called 'input').

When using one-way binding $onchanges fires when data is changed, especially useful with async propagation.

You can propagate data up to root control with binding &, that attribute will point to a root controller method with scope of the child ('output').