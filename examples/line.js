var material = new THREE.LineBasicMaterial({
	color: 0x00ff00
});

var geometry = new THREE.Geometry();

geometry.vertices.push(
	new THREE.Vector3( -10, 0, 0 ),
	new THREE.Vector3( 0, 10, 0 ),
    new THREE.Vector3( 10, 0, 0 ),
);

var line = new THREE.Line( geometry, material );

scene.add( line );

camera.position.z = 100;

function animate() {
    requestAnimationFrame( animate );
    line.rotation.x += 0.01;
    line.rotation.y += 0.01;
	renderer.render( scene, camera );
}
animate();