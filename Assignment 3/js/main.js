var angle = 0; 
var fovy = 90;
var zNear = 1.0;
var zFar = 5.0;


function init()
{
	var canvas = document.getElementById("webgl-canvas");
	gl = canvas.getContext("webgl2");
	gl.viewport(0,0, gl.canvas.width, gl.canvas.height);
	aspect = gl.canvas.width/gl.canvas.height;
	var p = perspective(fovy, aspect, zNear, zFar);
	gl.clearColor(0.2,0.2,0.2, 1.0);
	gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
	gl.enable(gl.CULL_FACE);
	gl.cullFace(gl.BACK);
	gl.clearDepth(1.0);
	gl.enable(gl.DEPTH_TEST);
	cube = new Cube(gl);
	cube.P = vec4(p);

	requestAnimationFrame(render);

}

function resize(){
	

	
}
window.onresize = resize;

function render()
{	
	gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

	var t = translate(0, 0, -0.5*(zNear + zFar));
	var s = scalem(0.5, 0.5, 0.5); 
	var r = rotate((angle += 0.25), [1, 1, 0]); 
	cube.T = vec4(t);
	cube.MV = mult(t,mult(r,s));
	

	
	cube.render();
	
	requestAnimationFrame(render);

}
	window.onload = init;