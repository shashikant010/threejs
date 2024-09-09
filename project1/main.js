import * as THREE from 'three';
//1. create a scene
const scene = new THREE.Scene();
scene.background=new THREE.Color("F0F0F0");

//add a camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z=5;

//create and add a cube object
const geometry = new THREE.BoxGeometry();
const material =  new THREE.MeshLambertMaterial({color:"#468585",emissive:"#468585"});
const cube = new THREE.mesh(geometry,material)
