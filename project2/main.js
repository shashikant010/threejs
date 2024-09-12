import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

const canvas = document.querySelector("#canvas");

//scene
const scene = new THREE.Scene();
scene.background = new THREE.Color("#f0f0f0");


//camera
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.z = 7;

//object
const geomentry = new THREE.DodecahedronGeometry()

const material = new THREE.MeshBasicMaterial({color:"#468585"});

const Dodecahedron = new THREE.Mesh(geomentry,material  )

Dodecahedron.position.set(-1,0,0)

const boxGeometry = new THREE.BoxGeometry({width:2,height:0.2,depth:2})
const boxMaterial = new THREE.MeshBasicMaterial({color:"#5e5e5e"})
const box = new THREE.Mesh(boxGeometry,boxMaterial)
//add position to box
box.position.set(0,1,0)
scene.add(Dodecahedron)
scene.add(box)

//light
const light = new THREE.SpotLight(0x006769, 100);
light.position.set(1, 1, 1);
scene.add(light);

//renderer
const renderer = new THREE.WebGLRenderer({  canvas });  
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);

//add orbit controls
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.05;
controls.enableZoom = true;
controls.enablePan = true;

//add animation
const animate = () => {
  requestAnimationFrame(animate);
  Dodecahedron.rotation.x += 0.01;
  Dodecahedron.rotation.y += 0.01;
  controls.update();
  renderer.render(scene, camera);
};
animate();

//handle window resizing
window.addEventListener("resize", () => {

  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
})