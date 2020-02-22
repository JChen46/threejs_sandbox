var scene = new THREE.Scene();

var d = 20;
var aspect = window.innerWidth/innerHeight;
var camera = new THREE.OrthographicCamera( - d * aspect, d * aspect, d, -d, 1, 1000 );
var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

// adding ground cube
var geometry = new THREE.BoxGeometry( 10, 2, 10 );
var material = new THREE.MeshNormalMaterial();
var ground = new THREE.Mesh( geometry, material );
scene.add( ground );

// // rotating cube
// cube.rotation.x = 0.45;
// cube.rotation.y = -0.25;

// Create a Cube Mesh with basic material
var geometry = new THREE.BoxGeometry( 1, 1, 1 );
var material = new THREE.MeshBasicMaterial( { color: "#433F81" } );
var cube = new THREE.Mesh( geometry, material );

// Add cube to Scene
scene.add( cube );

// Method 1 camera
// camera.position.set( 20, 20, 20 );
// camera.lookAt( scene.position );

// Method 2 camera
camera.position.set( 20, 20, 20 );
camera.rotation.order = 'YXZ';
camera.rotation.y = - Math.PI / 4;
camera.rotation.x = Math.atan( - 1 / Math.sqrt( 2 ));

// Orbit controls
// var controls = new THREE.OrbitControls( camera, renderer.domElement );
// controls = addEventListener( 'change' , render );
// controls.enableZoom = false;
// controls.enablePan = false;
// controls.maxPolarAngle = Math.PI / 2;

var light = new THREE.PointLight( 0xFFFF00 );
light.position.set( 10, 0, 25 );
scene.add( light );

var render = function () {
    requestAnimationFrame( render );
    renderer.render( scene, camera );
}