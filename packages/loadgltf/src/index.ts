import {
  Engine,
  Scene,
  SceneLoader,
  ArcRotateCamera,
  Vector3,
} from '@babylonjs/core'
import '@babylonjs/loaders/glTF'

const canvas: HTMLCanvasElement = document.querySelector('canvas#main')

const engine = new Engine(canvas, true)
const scene = new Scene(engine)
const camara = new ArcRotateCamera(
  'camera',
  -Math.PI / 2,
  Math.PI / 2.5,
  15,
  new Vector3(0, 0, 0),
  scene
)

SceneLoader.Append('./assets/', 'scene.gltf', scene, (scene) => {
  // Create a default arc rotate camera and light.
  scene.createDefaultCameraOrLight(true, true, true)

  // The default camera looks at the back of the asset.
  // Rotate the camera by 180 degrees to the front of the asset.
  // @ts-ignore
  scene.activeCamera.alpha += Math.PI
})
// SceneLoader.ImportMesh('', './assets/', 'scene.gltf', scene)

engine.runRenderLoop(() => {
  scene.render()
})

canvas.setAttribute('width', window.innerWidth + '')
canvas.setAttribute('height', window.innerHeight + '')
engine.resize()
window.addEventListener('resize', () => {
  canvas.setAttribute('width', window.innerWidth + '')
  canvas.setAttribute('height', window.innerHeight + '')
  engine.resize()
})
