const { app, BrowserWindow, ipcMain } = require('electron');
const path = require("path");
const fetch = (...args) =>
    import("node-fetch").then(({ default: fetch }) => fetch(...args));
const { shell } = require("electron");

var mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
        contextIsolation: true,
        preload: path.join(__dirname, "./preload.js"),
    }
  });
  mainWindow.loadFile('index.html');

 
}

app.whenReady().then(() => {
    createWindow();
    mainWindow.maximize();
  
    app.on("activate", function () {
      // On macOS it's common to re-create a window in the app when the
      // dock icon is clicked and there are no other windows open.
      if (BrowserWindow.getAllWindows().length === 0) createWindow();
    });
});
  
ipcMain.handle("openCoderJeet", () => {
    shell.openExternal("https://youtube.com/channel/UCf5gEjasFM8sa1XFmKFS60g");
});
  