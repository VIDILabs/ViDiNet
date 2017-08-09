const { app, Menu, BrowserWindow } = require('electron')

let mainWindow;

//Works in this context...

let template = [
    { label: app.getName(), submenu: [
        { label: 'custom action 1', accelerator: 'CmdOrCtrl+R',       click() { console.log('go!') } },
        { label: 'custom action 2', accelerator: 'Shift+Command+R', click() { console.log('go!') } },
        { type: 'separator' },
        { role: 'quit' }
    ] }
];
const menu = Menu.buildFromTemplate(template)

function createWindow() {
    mainWindow = new BrowserWindow({
        autoHideMenuBar: true,
        width: 640,
        height: 480
    });
    console.log("Making window...");
    mainWindow.loadURL(`file://${__dirname}/index.html`);
    mainWindow.webContents.openDevTools(); //For Debugging Electron side console messages
    mainWindow.on("closed", function() {
        mainWindow = null;
    });
    Menu.setApplicationMenu(menu)

}

app.on("ready", createWindow);

// app.on("browser-window-created", function(e, window) {
//     window.setMenu(null);
// });

app.on("window-all-closed", function() {
    if (process.platform !== "darwin") {
        app.quit();
    }
});

app.on("activate", function() {
    if (mainWindow === null) {
        createWindow();
    }
});