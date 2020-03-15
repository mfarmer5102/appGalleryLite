const {app, BrowserWindow} = require('electron')      
const path = require('path')

function createWindow () {   
    // Create the browser window.     
  var win = new BrowserWindow({
      width: 1100, 
      height: 760,
      icon: path.join(__dirname, 'build/icon.png')
    }) 
  win.loadURL('https://cafeamericano.github.io/appGalleryLite/')
  // and load the index.html of the app.     win.loadFile('index.html')   }      
}

app.on('ready', createWindow)
