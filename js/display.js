import { root, apps } from './consts.js'

export var currentFolder;
export var currentFile;

export async function setRootFolder() {
    currentFolder = root;
    currentFile = root;
}

export async function setCurrentFolder(folder) {
    currentFolder = folder;
}

export async function setCurrentFile(file) {
    currentFile = file;
}

export async function reloadWindow() {

    let background = document.getElementById("background");
    let pathLine = "| > ";
    pathLine = pathLine + currentFolder.getPath();
    for (let i = 0; i < 82 - currentFolder.getPath().length; ++i) {
        pathLine = pathLine + " ";
    }
    pathLine = pathLine + "|<br>";
    background.innerHTML = ".――[ DAWS v0.1 ]――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――.<br>" +
                           "|  Logged in as USER with permission level 1                                          |<br>" +
                           "|=====================================================================================|<br>" +
                           pathLine +
                           "|―――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――|<br>" +
                           "|                  |           |                                                      |<br>" +
                           "|                  |           |                                                      |<br>" +
                           "|                  |           |                                                      |<br>" +
                           "|                  |           |                                                      |<br>" +
                           "|                  |           |                                                      |<br>" +
                           "|                  |           |                                                      |<br>" +
                           "|                  |           |                                                      |<br>" +
                           "|                  |           |                                                      |<br>" +
                           "|                  |           |                                                      |<br>" +
                           "|                  |           |                                                      |<br>" +
                           "|                  |           |                                                      |<br>" +
                           "|                  |           |                                                      |<br>" +
                           "|                  |           |                                                      |<br>" +
                           "|                  |           |                                                      |<br>" +
                           "|                  |           |                                                      |<br>" +
                           "|                  |           |                                                      |<br>" +
                           "|                  |           |                                                      |<br>" +
                           "|                  |           |                                                      |<br>" +
                           "|                  |           |                                                      |<br>" +
                           "|                  |           |                                                      |<br>" +
                           "|                  |           |                                                      |<br>" +
                           "|                  |           |                                                      |<br>" +
                           "|                  |           |                                                      |<br>" +
                           "|                  |           |                                                      |<br>" +
                           "|                  |           |                                                      |<br>" +
                           "|                  |           |                                                      |<br>" +
                           "|                  |           |                                                      |<br>" +
                           "|                  |           |                                                      |<br>" +
                           "|                  |           |                                                      |<br>" +
                           "|                  |           |                                                      |<br>" +
                           "|                  |           |                                                      |<br>" +
                           "|                  |           |                                                      |<br>" +
                           "|                  |           |                                                      |<br>" +
                           "|                  |           |                                                      |<br>" +
                           "|                  |           |                                                      |<br>" +
                           "'―――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――'"


    loadSidebar();

}

function loadSidebar() {
    document.getElementById("sidebar0").innerHTML = currentFolder.getItemName(0);
    document.getElementById("sidebar1").innerHTML = currentFolder.getItemName(1);
    document.getElementById("sidebar2").innerHTML = currentFolder.getItemName(2);
    document.getElementById("sidebar3").innerHTML = currentFolder.getItemName(3);
    document.getElementById("sidebar4").innerHTML = currentFolder.getItemName(4);
}