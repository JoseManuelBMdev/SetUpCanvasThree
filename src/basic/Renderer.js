import * as THREE from 'three';

const renderer = new THREE.WebGLRenderer({antialias:true, alpha:true, precision:'mediump'});
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );
console.log(renderer.domElement);
//renderer.shadowMap.enabled = true;
// renderer.shadowMap.type = THREE.PCFSoftShadowMap; // default THREE.PCFShadowMap
console.log(renderer);

export default renderer
