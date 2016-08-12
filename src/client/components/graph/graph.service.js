class TargetService {
  constructor() {
    this.name = 'graph service';

    this.d3 = {};
    this.padding = 20;
    this.pathClass = 'path';
    this.xScale = undefined;
    this.yScale = undefined;
    this.xAxisGen = undefined;
    this.yAxisGen = undefined;
    this.lineFun = undefined;
  }

  // TODO: most of these should be private
  graph(d3, svg, rawSvg, data) {
    console.log('in service', data);
    this.drawLineChart(d3, rawSvg, data.data, svg);
  }

  getName() {
    return this.name;
  }

  setChartParameters(d3, rawSvg, data) {
    this.xScale = d3.scaleLinear()
      .domain([data[0].hour, data[data.length - 1].hour])
      .range([this.padding + 5, rawSvg.clientWidth - this.padding]);

    this.yScale = d3.scaleLinear()
      .domain([0, d3.max(data, function (d) {
        return d.sales;
      })])
    .range([rawSvg.clientHeight - this.padding, 0]);

    this.xAxisGen = d3.axisBottom()
      .scale(this.xScale)
      .ticks(data.length - 1);

    this.yAxisGen = d3.axisLeft()
      .scale(this.yScale)
      .ticks(5);

    this.lineFun = d3.line()
      .x((d) => this.xScale(d.hour))
      .y((d) => this.yScale(d.sales))
      .curve(d3.curveCatmullRom.alpha(0.5));
  }

  drawLineChart(d3, rawSvg, data, svg) {
    if (data === undefined) return;

    this.setChartParameters(d3, rawSvg, data);

    svg.append("svg:g")
       .attr("class", "x axis")
       .attr("transform", "translate(0,180)")
       .call(this.xAxisGen);

     svg.append("svg:g")
        .attr("class", "y axis")
        .attr("transform", "translate(20,0)")
        .call(this.yAxisGen);

     svg.append("svg:path")
        .attr("d", this.lineFun(data))
        .attr("stroke", "blue")
        .attr("stroke-width", 2)
        .attr("fill", "none")
        .attr("class", this.pathClass);
  }
}

export default TargetService;