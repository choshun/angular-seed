class AppController {
  constructor(targetService) {
    this.view = 'poopy pants'
  }

  modifyView(view) {
    this.view = view + 'modified';
  }
}

export default AppController;