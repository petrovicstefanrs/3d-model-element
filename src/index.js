import HTMLModelElement from './modelElement.js';
import modelLoader from './modelLoader.js';
import gltfLoader from './loaders/gltf';
import objLoader from './loaders/obj';


if ('customElements' in window) {

  if (typeof THREE === 'undefined') {
    throw new Error('Component attempted to register before THREE JS was available.')
  }
  
  if ('GLTFLoader' in THREE) {
    modelLoader.register('.gltf', gltfLoader);
    modelLoader.register('.glb', gltfLoader);
  }

  if ('OBJLoader' in THREE) {
    modelLoader.register('.obj', objLoader);
  }

  customElements.define('x-model', HTMLModelElement);
}
