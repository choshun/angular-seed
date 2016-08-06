class AppController {
  constructor(targetService) {
    this.view = 'pants'
  }

  modifyView(view) {
    this.view = view + 'modified';
  }
}

export default AppController;