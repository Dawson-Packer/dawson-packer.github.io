import { root, apps, emptyExe } from './consts.js'

export var currentFolder;
export var currentFile;
export var currentExe;

export async function sidebar_element_pressed(index) {
    let sidebarElement = currentFolder.getItem(index);
    if (sidebarElement.getType() == "text") {
        console.log("Opening a text file");
        setCurrentFile(sidebarElement);
        setCurrentExe(emptyExe);
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
        setCurrentExe(emptyExe);
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
        setCurrentExe(emptyExe);
    }
    else if (sidebarElement.getType() == "executable") {
        console.log("Running EXE");
        setCurrentExe(sidebarElement.object);
    }
    reloadWindow();
}

export async function setRootFolder() {
    currentFolder = root;
    currentFile = root;
    currentExe = emptyExe;
}

export async function setCurrentFolder(folder) {
    currentFolder = folder;
}

export async function setCurrentFile(file) {
    currentFile = file;
}

export async function setCurrentExe(exe) {
    currentExe = exe;
    exeLoop();
}

async function exeLoop() {
    while (currentExe.isRunning() == true) {
        currentExe.run();
        element = document.getElementById("exe_content");
        content = "";
        for (let i = 0; i < currentExe.num_lines; i++) {
            content = content + currentExe.contents[i];
            if (i < currentExe.num_lines - 1) {
                content = content + "<br>";
            }
        }
    }
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