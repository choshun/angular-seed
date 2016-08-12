import * as D3 from 'd3';

class TargetController {
  constructor(graphService) {

    this.graphService = graphService;
    this.name = 'Controller Component';
    this.data = {};
    this.rawSvg = document.getElementById('graph');
    this.d3 = D3;
    this.svg = this.d3.select(this.rawSvg);
  }

  getServiceName() {
  	return this.graphService.getName();
  }

  $onChanges(changesObj) {
    console.log('import?', this.data, changesObj);
    // console.log('fire graph stuff!', typeof changesObj, this.svg);
    this.graphService.graph(this.d3, this.svg, this.rawSvg, this.data);
  }
}

export default TargetController;