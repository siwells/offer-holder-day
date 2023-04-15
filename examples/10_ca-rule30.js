function draw(generation, population){
	for (var i=0; i<population.length; i++) 	{
    	ctx.rect(i*dimension, generation*dimension, dimension, dimension)
    	if(population[i] === 1)
        { ctx.fillRect(i*dimension, generation*dimension, dimension, dimension) }
	    ctx.stroke();
	}
}
function next_gen(old) {
  var old = [0].concat(old, [0]);
  var state = []; // The new state.
 
  for (var i=1; i<old.length-1; i++) {
           if (old[i-1] === 1 && old[i] === 1 && old[i+1] === 1) { state[i-1] = 0; }
      else if (old[i-1] === 1 && old[i] === 1 && old[i+1] === 0) { state[i-1] = 0; }
      else if (old[i-1] === 1 && old[i] === 0 && old[i+1] === 1) { state[i-1] = 0; }
      else if (old[i-1] === 1 && old[i] === 0 && old[i+1] === 0) { state[i-1] = 1; }
      else if (old[i-1] === 0 && old[i] === 1 && old[i+1] === 1) { state[i-1] = 1; }
      else if (old[i-1] === 0 && old[i] === 1 && old[i+1] === 0) { state[i-1] = 1; }
      else if (old[i-1] === 0 && old[i] === 0 && old[i+1] === 1) { state[i-1] = 1; }
      else if (old[i-1] === 0 && old[i] === 0 && old[i+1] === 0) { state[i-1] = 0; }

  }
  return state;
}
var c = document.createElement("canvas");
var ctx = c.getContext("2d");
var dimension = 10
var current = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var next = [];
var j =60;
for (var i = 0; i < j; i++) {
    draw(i, current);
    current = next_gen(current);
} 
document.body.replaceWith(c);
