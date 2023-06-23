const { contextBridge, ipcMain, ipcRenderer } = require('electron')

const indexBridge = require('index_preload')

if (location.href.endsWith('index.html')) {
  Bridge = indexBridge
}
contextBridge.exposeInMainWorld('Bridge', Bridge)