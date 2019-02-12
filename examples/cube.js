var light = new THREE.AmbientLight(0xffffff,0.5);

scene.add(light);

var light1 = new THREE.PointLight(0xffffff,0.5);
light1.position.set( 50, 50, 50 );

scene.add(light1);

var geometry = new THREE.BoxGeometry(100,100,100);

var material = new THREE.MeshLambertMaterial({ color: 0xF3FFE2});

var mesh = new THREE.Mesh(geometry, material);

scene.add(mesh);

camera.position.z = 750;

function animate() {
    requestAnimationFrame( animate );
    mesh.rotation.x += 0.01;
    mesh.rotation.y += 0.01;
	renderer.render( scene, camera );
}
animate();