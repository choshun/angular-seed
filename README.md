- npm install
- npm start
- npm run watch
- go to localhost:2016

These helped with me getting up and running with Angular 1.5 (have been in 1.3 land for a while).

Basic setup and file structure:
https://github.com/kitconcept/webpack-starter-angular/

Component parent to child state propagation. Supposedly should be easy to switch to Angular 2's flux architecture:
http://dfsq.info/site/read/angular-components-communication

Ideally in the component tags in app.html you should see all the parameters the component needs. In the component definition these should mostly be bound one way in bindings ('<'). So-called 'input'.

TODO: how does onViewChange: '&' work exactly? kinda confusing. This is how 'output' works.

TODO:
- Make controls component have a field that drives the name.
- Make controls component use the form stuff from example.
- Make controls component have multiple forms that drive the query.
- Make controls component drive multiple destinations in target.