import { Engine } from 'babylonjs'

const canvas: HTMLCanvasElement = document.querySelector('canvas#main')
canvas.setAttribute('width', window.innerWidth + '')
canvas.setAttribute('height', window.innerHeight + '')

const engine = new Engine(canvas, true)

const scene = new BABYLON.Scene(engine as any)
const camera = new BABYLON.ArcRotateCamera(
  'camera',
  -Math.PI / 2,
  Math.PI / 2.5,
  3,
  new BABYLON.Vector3(0, 0, 0),
  scene
)
camera.attachControl(canvas, true)
const light = new BABYLON.HemisphericLight(
  'light',
  new BABYLON.Vector3(0, 1, 0),
  scene
)
const box = BABYLON.MeshBuilder.CreateBox('box', {}, scene)

engine.runRenderLoop(() => {
  scene.render()
})

window.addEventListener('resize', () => {
  //   canvas.setAttribute('width', window.innerWidth + '')
  //   canvas.setAttribute('height', window.innerHeight + '')
  engine.resize()
})
