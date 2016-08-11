class AppController {
  constructor(targetService) {
    this.view = 'onions'
  }

  modifyView(view) {
    this.view = view + 'modified';
    console.log('booop! (hopefully where I refire d3)');
  }
}

export default AppController;