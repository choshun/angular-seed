class TargetController {
  constructor(targetService) {
  	this.targetService = targetService;
    this.name = 'Controller Component';
    this.view = 'boopykins';
  }

  getServiceName() {
  	return this.targetService.getName();
  }
}

export default TargetController;