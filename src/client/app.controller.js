class AppController {
  constructor(targetService) {
    this.data = 'onions'
  }

  modifyData(data) {
    this.data = data + ' modified';
  }
}

export default AppController;