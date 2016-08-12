class TargetController {
  constructor(graphService) {
  	this.graphService = graphService;
    this.name = 'Controller Component';
    this.data = 'test';
    this.svg = document.getElementById('graph');
  }

  getServiceName() {
  	return this.graphService.getName();
  }

  $onChanges(changesObj) {
    console.log('fire graph stuff!', changesObj, this.svg);
  }
}

export default TargetController;