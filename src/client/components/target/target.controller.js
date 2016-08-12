class TargetController {
  constructor(targetService) {
  	this.targetService = targetService;
    this.name = 'Controller Component';
    this.data = 'test';
  }

  getServiceName() {
  	return this.targetService.getName();
  }

  $onChanges(changesObj) {
    console.log('fire target stuff!', changesObj);
  }
}

export default TargetController;