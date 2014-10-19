var gliphMakers = {

  makePlus: function(svg, c, r) {
    var plusg, crossThickness
    plusg = d3.select(svg).append("g")
    console.log(plusg)
    plusg.append("circle")
         .attr("cx", c[0])
         .attr("cy", c[1])
         .attr("r", r)
         .attr("fill", "red")
    crossThickness = r/2
    plusg.append("line")
         .attr("x1", c[0] - r)
         .attr("y1", c[1])
         .attr("x2", c[0] + r)
         .attr("y2", c[1])
         .attr("stroke", "black")
         .attr("stroke-width", crossThickness)
    plusg.append("line")		    
         .attr("x1", c[0])
         .attr("y1", c[1] - r)
         .attr("x2", c[0])
         .attr("y2", c[1] + r)
	 .attr("stroke", "black")
	 .attr("stroke-width", crossThickness)
  },

  makeDownArrow: function(svg, c, r) {
    var arrowg = d3.select(svg).append("g")
    arrowg.append("circle")
         .attr("cx", c[0])
         .attr("cy", c[1])
         .attr("r", r)
         .attr("fill", "red")
    var arrowvs = [
      [c[0], c[1] + r], // Top point of arrow
      [c[0] - .66 * r, c[1] + .33 * r], // Left corner of arrow
      [c[0] - .25 * r, c[1] + .33 * r], // Left middle of arrow
      [c[0] - .25 * r, c[1] - r], // Left bottom of arrow
      [c[0] + .25 * r, c[1] - r], // Right bottom of arrow
      [c[0] + .25 * r, c[1] + .33 * r], // Right middle of arrow
      [c[0] + .66 * r, c[1] + .33 * r], // Right corner of arrow
      [c[0], c[1] + r] // Back to the top point, closing up
    ]
    var arrowl = d3.svg.line()
               .x(function(d) {return d[0]})
	       .y(function(d) {return d[1]})
	       .interpolate("linear")
    arrowg.append("path")
          .attr("d", arrowl(arrowvs))
  },

}
