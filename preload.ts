import { contextBridge, ipcRenderer } from 'electron';

contextBridge.exposeInMainWorld('electronAPI', {
  runPrediction: (input: number) => ipcRenderer.invoke('runPrediction', input),
});