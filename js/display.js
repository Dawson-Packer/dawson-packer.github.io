import { root, apps } from './consts.js'

export var currentFolder;
export var currentFile;

export async function sidebar_element_pressed(index) {
    let sidebarElement = currentFolder.getItem(index);
    if (sidebarElement.getType() == "text") {
        console.log("Opening a text file");
        setCurrentFile(sidebarElement);
        // let preview_text = "";
        // for (let i = 0; i < sidebarElement.contents.length; ++i) {
        //     console.log(sidebarElement.contents[i]);
        //     preview_text = preview_text + sidebarElement.contents[i] + "<br>";
        // }
        // document.getElementById("preview").innerHTML = preview_text;


    }
    else if (sidebarElement.getType() == "folder") {
        console.log("Opening a folder");
        setCurrentFolder(sidebarElement);
        setCurrentFile(sidebarElement);
        // let preview_text = "";
        // for (let i = 0; i < sidebarElement.contents.length; ++i) {
        //     console.log(sidebarElement.contents[i]);
        //     preview_text = preview_text + sidebarElement.contents[i] + "<br>";
        // }
        // document.getElementById("preview").innerHTML = preview_text;
    }
    else if (sidebarElement.getType() == "upFolder") {
        console.log("Going up!");
        setCurrentFolder(sidebarElement.object);
        setCurrentFile(sidebarElement.object);
    }
    reloadWindow();
}

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

    loadPreview();
    loadSidebar();

}

function loadPreview() {
    let preview_text = "";
    for (let i = 0; i < currentFile.contents.length; ++i) {
        console.log(currentFile.contents[i]);
        preview_text = preview_text + currentFile.contents[i] + "<br>";
    }
    document.getElementById("preview").innerHTML = preview_text;
}

function loadSidebar() {
    document.getElementById("sidebar0").innerHTML = currentFolder.getItemName(0);
    document.getElementById("sidebar1").innerHTML = currentFolder.getItemName(1);
    document.getElementById("sidebar2").innerHTML = currentFolder.getItemName(2);
    document.getElementById("sidebar3").innerHTML = currentFolder.getItemName(3);
    document.getElementById("sidebar4").innerHTML = currentFolder.getItemName(4);
}