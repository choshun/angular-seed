class AppController {
  constructor(graphService) {
    this.data = 'onions'
  }

  modifyData(data) {
    this.data = data + ' modified';
  }
}

export default AppController;