import { app, BrowserWindow, ipcMain } from 'electron';
import * as path from 'path';
import * as tf from '@tensorflow/tfjs-node';

let mainWindow: BrowserWindow | null;
let model: tf.LayersModel;

async function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      preload: path.join(__dirname, 'preload.js')
    },
  });

  await mainWindow.loadFile('index.html');

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

async function loadModel() {
  // Load your TensorFlow.js model here
  // For this example, we'll create a simple model
  model = tf.sequential();
  model.add(tf.layers.dense({units: 1, inputShape: [1]}));
  model.compile({loss: 'meanSquaredError', optimizer: 'sgd'});
  
  // Train the model on some data
  const xs = tf.tensor2d([-1, 0, 1, 2, 3, 4], [6, 1]);
  const ys = tf.tensor2d([-3, -1, 1, 3, 5, 7], [6, 1]);
  await model.fit(xs, ys, {epochs: 250});
}

app.on('ready', async () => {
  await loadModel();
  await createWindow();
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});

ipcMain.handle('runPrediction', async (event, input: number) => {
  const inputTensor = tf.tensor2d([input], [1, 1]);
  const outputTensor = model.predict(inputTensor) as tf.Tensor;
  const outputData = await outputTensor.data();
  return outputData[0];
});