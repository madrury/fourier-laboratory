// fourier-polynomial.js
//
// A class modeling a fourier polynomial (finite degree).

var FourierPolynomial = function(cs) {
  
  var _cs = cs

  return {
  
    get degree() {
      return _cs.length
    },

    // The maximum possible value obtained by the polynomial
    get pmax() {
      var s, i
      s = 0
      for(i = 0; i < _ys.length; i++) {
        s += Math.abs(_ys[i])
      }
      return s
    },

    // Evaluate the polynomial at a number after shifting by a given 
    // phase.
    _eval: function(x, phase) {
      phase = phase || 0
      var acc, i
      acc = 0
      for(i = 0; i < this.degree; i++) {
        acc += _cs[i] * Math.sin(2 * i * Math.PI * (x - phase))
      }
      return acc
    },

    // Evaluate teh polynomial at an array after shifting a given 
    // pahse.
    eval: function(xs, phase) {
      that = this
      xs.map(function(x) {return that._eval(x, phase)})
      that = null // Destruct
    },

    // Transform a fourier series by passing it through a transformation
    // tree.
    transform: function(ttree) {
      _cs = ttree.eval(_cs)
    },
  }
}
