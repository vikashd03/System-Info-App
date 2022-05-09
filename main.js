const electron = require('electron');
const path = require('path');
const url = require('url');

let {app, BrowserWindow,Menu} = electron;

let win1;

function createWindow(){
    win1 = new BrowserWindow({
        height:700,
        width:650,
        minWidth:720,
        minHeight:620,
        // frame:false,
        icon:__dirname+'/img/img.png',
        webPreferences: {
            nodeIntegration: true
        }
    });


win1.loadURL(url.format({
    pathname:path.join(__dirname,'index.html'),
    protocol:'file:',
    slashes: true
}));

// win1.webContents.openDevTools();

win1.on('closed', () => {
    win1 = null;
});

const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);

Menu.setApplicationMenu(mainMenu);

}

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

const mainMenuTemplate = [
    {
        label:'file',
        submenu:[
            {
            role: 'reload'
            }
        ]
    },
    {
        label:'exit',
        click(){
            app.quit();
        }
    }
]

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

app.on('ready', createWindow);

app.on('window-all-closed',() => {
    if(process.platform !== 'darwin'){
        app.quit();
    }
});