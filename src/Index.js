import scene from "./basic/Scene.js";
import camera from "./basic/Camera.js";
import renderer from "./basic/Renderer.js";
import light from "./basic/Light.js";
import resize from "./basic/Resize.js";
import loopMachine from "./basic/LoopMachine.js";
import controls from "./basic/OrbitImplementation.js"
import { GLTFLoader } from '../node_modules/three/examples/jsm/loaders/GLTFLoader.js';
import * as THREE from 'three';

camera.position.set( 0.04, 1.04 , -2.75) //-0.21,1.59,-4.17
scene.add(light)
resize.start(renderer)

const loader = new GLTFLoader().setPath('src/models/armadura/')
loader.load('scene.gltf', async function(gtlf){
    const model = gtlf.scene
    model.scale.set(10,10,10)
    camera.lookAt(model.position)
    model.position.set(0,0,0) //-5,1,0
    model.traverse((child)=>{
         if (child.isMesh) {
            // child.geometry.computeVertexNormals();
            // child.geometry.normalizeNormals();
            child.material.shading = THREE.SmoothShading;
        }
    })
    await renderer.compileAsync( model, camera, scene );

	scene.add(model);
    
})
loopMachine.addCallback(() => {
    controls.update()
    renderer.render(scene, camera)
    //console.log(camera.position);
})

loopMachine.start()