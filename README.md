- npm install
- npm start
- npm run watch
- go to localhost:2016

These helped with me getting up and running with Angular 1.5 (have been in 1.3 land for a while).

Basic setup and file structure:
https://github.com/kitconcept/webpack-starter-angular/

Component parent to child state propagation. Supposedly should be easy to switch to Angular 2's flux architecture:
http://dfsq.info/site/read/angular-components-communication

This is a simple child to child component data propagation example using angular's new component type.

Ideally in the component tags in app.html you should see all the parameters the component needs. In the component definition these should be bound with one way bindings '<' (called 'input'). When using one-way binding $onchanges fires when data is changed in child controller. This is especially useful with async propagation. No custom events or watch needed.

You can propagate data up to root control with binding & in the component definition, that attribute will point to a root controller method with scope of the child ('output').

Just read the code :P. It's still kinda confusing imo, but is pretty clean once you get it.