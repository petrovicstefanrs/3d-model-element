import HTMLModelElement from './modelElement.js';
import modelLoader from './modelLoader.js';
import objLoader from './loaders/obj';


if ('customElements' in window) {

  if (!('THREE' in window)) {
    throw 'THREE (threejs.org) is required.';
  }

  if ('OBJLoader' in THREE) {
    modelLoader.register('.obj', objLoader);
  }

  customElements.define('x-model', HTMLModelElement);
}