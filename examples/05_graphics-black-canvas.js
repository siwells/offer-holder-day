var c = document.createElement("Canvas");
c.id = "cv";
c.style.cssText = ' height: 100%; width: 100%; position:absolute; overflow:hidden; background-color: black; ';
var ctx = c.getContext("2d");
ctx.canvas.width  = window.innerWidth;
ctx.canvas.height = window.innerHeight;
document.body.replaceWith(c);

