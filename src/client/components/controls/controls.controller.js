class ControlsController {
  constructor(controlsService) {
  	this.controlsService = controlsService;
    this.name = 'Controller Component';
  }

  getServiceName() {
  	return this.controlsService.getName();
  }

  setView(view) {
    console.log('view!!', view);
	  this.view = view;
	  this.onViewChange({$event: { view }});
	}
}

export default ControlsController;