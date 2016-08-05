class ControlsController {
  constructor(controlsService) {
  	this.controlsService = controlsService;
    this.name = 'Controller Component';
  }

  getServiceName() {
  	return this.controlsService.getName();
  }
}

export default ControlsController;