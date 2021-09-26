const { app, BrowserWindow } = require('electron');
const isDev = require('electron-is-dev');
const path = require('path');

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 600,
    height: 600,
    backgroundColor: '#001529',
    darkTheme: true,
    icon: `file://${__dirname}/dist/assets/logo.png`,
    webPreferences: {
      nodeIntegration: true
    }
  });

  mainWindow.loadURL(isDev ? 'http://localhost:4200 ' : `file://${path.join(__dirname, '/build/index.html')}`);

  mainWindow.on('closed', function () {
    mainWindow = null
  });

  // mainWindow.setMenu(null);
}

app.on('ready', createWindow);

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activagte', function () {
  if (window === null) {
    createWindow();
  }
});
