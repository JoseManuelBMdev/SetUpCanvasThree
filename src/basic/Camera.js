import * as THREE from 'three';
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
console.log(camera.position);

export default camera
