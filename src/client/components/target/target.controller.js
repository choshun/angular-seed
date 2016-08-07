class TargetController {
  constructor(targetService) {
  	this.targetService = targetService;
    this.name = 'Controller Component';
  }

  getServiceName() {
  	return this.targetService.getName();
  }
}

export default TargetController;