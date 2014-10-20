var gliphMakers = {

  // Draw a plus gliph centered at c with radius r.
  makePlus: function(svg, c, r) {
    var plusg, crossThickness
    plusg = d3.select(svg).append("g")
    plusg.append("circle")
         .attr("cx", c[0])
         .attr("cy", c[1])
         .attr("r", r)
         .attr("fill", "lightgrey")
    crossThickness = r/2
    plusg.append("line")
         .attr("x1", c[0] - .95 * r)
         .attr("y1", c[1])
         .attr("x2", c[0] + .95 * r)
         .attr("y2", c[1])
         .attr("stroke", "dimgrey")
         .attr("stroke-width", crossThickness)
    plusg.append("line")		    
         .attr("x1", c[0])
         .attr("y1", c[1] - .95 * r)
         .attr("x2", c[0])
         .attr("y2", c[1] + .95 * r)
	 .attr("stroke", "dimgrey")
	 .attr("stroke-width", crossThickness)
  },

  // Draw a times gliph centered at c with radius r.
  makeTimes: function(svg, c, r) {
    var timesg, crossThickness, rootTwo
    timesg = d3.select(svg, c, r)
    timesg.append("circle")
         .attr("cx", c[0])
         .attr("cy", c[1])
         .attr("r", r)
         .attr("fill", "lightgrey")
    crossThickness = r/2
    recipRootTwo = 1 / Math.sqrt(2)
    timesg.append("line")
         .attr("x1", c[0] - .95 * r * recipRootTwo)
         .attr("y1", c[1] + .95 * r * recipRootTwo)
         .attr("x2", c[0] + .95 * r * recipRootTwo)
         .attr("y2", c[1] - .95 * r * recipRootTwo)
         .attr("stroke", "dimgrey")
         .attr("stroke-width", crossThickness)
    timesg.append("line")		    
         .attr("x1", c[0] + .95 * r * recipRootTwo)
         .attr("y1", c[1] + .95 * r * recipRootTwo)
         .attr("x2", c[0] - .95 * r * recipRootTwo)
         .attr("y2", c[1] - .95 * r * recipRootTwo)
	 .attr("stroke", "dimgrey")
	 .attr("stroke-width", crossThickness)
  },

  // Draw a down arrow gliph centered at c with radius r.
  makeDownArrow: function(svg, c, r) {
    var arrowg, arrowv, arrowline
    arrowg = d3.select(svg).append("g")
    arrowg.append("circle")
         .attr("cx", c[0])
         .attr("cy", c[1])
         .attr("r", r)
         .attr("fill", "lightgrey")
    arrowvs = [
      [c[0], c[1] + r], // Top point of arrow
      [c[0] - .66 * r, c[1] + .33 * r], // Left corner of arrow
      [c[0] - .25 * r, c[1] + .33 * r], // Left middle of arrow
      [c[0] - .25 * r, c[1] - .95 * r], // Left bottom of arrow
      [c[0] + .25 * r, c[1] - .95 * r], // Right bottom of arrow
      [c[0] + .25 * r, c[1] + .33 * r], // Right middle of arrow
      [c[0] + .66 * r, c[1] + .33 * r], // Right corner of arrow
      [c[0], c[1] + r] // Back to the top point, closing up
    ]
    arrowline = d3.svg.line()
                  .x(function(d) {return d[0]})
                  .y(function(d) {return d[1]})
                 .interpolate("linear")
    arrowg.append("path")
          .attr("d", arrowline(arrowvs))
	  .attr("stroke", "firebrick")
	  .attr("fill", "firebrick")
  },

  // Draw an up arrow gliph centered at c with radius r.
  makeUpArrow: function(svg, c, r) {
    var arrowg, arrowv, arrowline
    arrowg = d3.select(svg).append("g")
    arrowg.append("circle")
         .attr("cx", c[0])
         .attr("cy", c[1])
         .attr("r", r)
         .attr("fill", "lightgrey")
    arrowvs = [
      [c[0], c[1] - r], // Top point of arrow
      [c[0] - .66 * r, c[1] - .33 * r], // Left corner of arrow
      [c[0] - .25 * r, c[1] - .33 * r], // Left middle of arrow
      [c[0] - .25 * r, c[1] + .95 * r], // Left bottom of arrow
      [c[0] + .25 * r, c[1] + .95 * r], // Right bottom of arrow
      [c[0] + .25 * r, c[1] - .33 * r], // Right middle of arrow
      [c[0] + .66 * r, c[1] - .33 * r], // Right corner of arrow
      [c[0], c[1] - r] // Back to the top point, closing up
    ]
    arrowline = d3.svg.line()
                  .x(function(d) {return d[0]})
                  .y(function(d) {return d[1]})
                 .interpolate("linear")
    arrowg.append("path")
          .attr("d", arrowline(arrowvs))
	  .attr("stroke", "limegreen")
	  .attr("fill", "limegreen")
  },
}
