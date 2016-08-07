class ControlsController {
  constructor(controlsService) {
  	this.controlsService = controlsService;
    this.name = 'Controller Component';
    this.githubUsername = 'choshun';
    this.result = {};
  }

  getServiceName() {
  	return this.controlsService.getName();
  }

  getDetails() {
    this.controlsService.getItems(this.githubUsername).then((res) => {
      this.result = res.data;
      console.log('result?');
      console.table(this.result.data.login);

      this.setView(this.result.data.login);
    });
  }

  setView(view) {
    console.log('view!!', view);
	  this.view = view;
	  this.onViewChange({$event: { view }});
	}
}

export default ControlsController;