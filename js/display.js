import { root, apps, emptyExe } from './consts.js'
import { delay } from './boot_sequence.js'

export var currentFolder;
export var currentFile;
export var currentExe;

export async function sidebar_element_pressed(index) {
    let sidebarElement = currentFolder.getItem(index);
    if (sidebarElement.getType() == "text") {
        console.log("Opening a text file");
        setCurrentFile(sidebarElement);
        setCurrentExe(emptyExe);
    }
    else if (sidebarElement.getType() == "folder") {
        console.log("Opening a folder");
        setCurrentFolder(sidebarElement);
        setCurrentFile(sidebarElement);
        setCurrentExe(emptyExe);
    }
    else if (sidebarElement.getType() == "upFolder") {
        console.log("Going up!");
        setCurrentFolder(sidebarElement.object);
        setCurrentFile(sidebarElement.object);
        setCurrentExe(emptyExe);
    }
    else if (sidebarElement.getType() == "executable") {
        console.log("Running EXE");
        // document.getElementById("exe_content").style.backgroundColor = "black";
        setCurrentExe(sidebarElement);
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
    if (currentExe.getName() == "Empty") { return; }
    else { currentExe.setRunning(true); }
    document.getElementById("background").style.filter = "blur(8px)"
    document.getElementById("main_content").style.filter = "blur(8px)"
    while (currentExe.isRunning() == true) {
        console.log("Running");
        currentExe.run();
        let element = document.getElementById("exe_content");
        let content = "";
        for (let i = 0; i < currentExe.num_lines; i++) {
            content = content + currentExe.contents[i];
            if (i < currentExe.num_lines - 1) {
                content = content + "<br>";
            }
        element.innerHTML = content;
        }
        await delay(1000);
    }
    document.getElementById("exe_content").style.backgroundColor = "transparent";
}

export async function reloadWindow() {

    let background = document.getElementById("background");
    let pathLine = "| > ";
    pathLine = pathLine + currentFolder.getPath();
    for (let i = 0; i < 82 - currentFolder.getPath().length; ++i) {
        pathLine = pathLine + " ";
    }
    //-->   Logged in as USER with permission level 1                                          <--
    pathLine = pathLine + "|▊<br>";
    background.innerHTML = ".――[ DAWS v0.1 ]――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――.<br>" +
                        //    "|&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&|▊<br>" +
                           "|=====================================================================================|▊<br>" +
                        //    "|                                                                                     |▊<br>" +
                           pathLine +
                           "|―――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――|▊<br>" +
                           "|                  |           |                                                      |▊<br>" +
                           "|――――――――――――――――――|           |                                                      |▊<br>" +
                           "|                  |           |                                                      |▊<br>" +
                           "|――――――――――――――――――|           |                                                      |▊<br>" +
                           "|                  |           |                                                      |▊<br>" +
                           "|――――――――――――――――――|           |                                                      |▊<br>" +
                           "|                  |           |                                                      |▊<br>" +
                           "|――――――――――――――――――|           |                                                      |▊<br>" +
                           "|                  |           |                                                      |▊<br>" +
                           "|                  |           |                                                      |▊<br>" +
                           "|                  |           |                                                      |▊<br>" +
                           "|                  |           |                                                      |▊<br>" +
                           "|                  |           |                                                      |▊<br>" +
                           "|                  |           |                                                      |▊<br>" +
                           "|                  |           |                                                      |▊<br>" +
                           "|                  |           |                                                      |▊<br>" +
                           "|                  |           |                                                      |▊<br>" +
                           "|                  |           |                                                      |▊<br>" +
                           "|                  |           |                                                      |▊<br>" +
                        //    "|                  |           |                                                      |<br>" +
                        //    "|                  |           |                                                      |<br>" +
                        //    "|                  |           |                                                      |<br>" +
                        //    "|                  |           |                                                      |<br>" +
                        //    "|                  |           |                                                      |<br>" +
                        //    "|                  |           |                                                      |<br>" +
                        //    "|                  |           |                                                      |<br>" +
                        //    "|                  |           |                                                      |<br>" +
                        //    "|                  |           |                                                      |<br>" +
                        //    "|                  |           |                                                      |<br>" +
                        //    "|                  |           |                                                      |<br>" +
                        //    "|                  |           |                                                      |<br>" +
                        //    "|                  |           |                                                      |<br>" +
                        //    "|                  |           |                                                      |<br>" +
                           "|                  |           |                                                      |▊<br>" +
                           "|                  |           |                                                      |▊<br>" +
                           "|                  |           |                                                      |▊<br>" +
                           "'―――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――'▊<br>" +
                           " ▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇'"

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
    let box_bottom = "──────────────";
    let sidebar0_name = currentFolder.getItemName(0);
    let spaces = "";
    for (let i = 0; i < 12 - sidebar0_name.length; i++) {
        spaces += " ";
    }
    // document.getElementById("sidebar0").innerHTML = sidebar0_name + "<br>" + box_bottom;

    document.getElementById("sidebar0").innerHTML = currentFolder.getItemName(0);
    document.getElementById("sidebar1").innerHTML = currentFolder.getItemName(1);
    document.getElementById("sidebar2").innerHTML = currentFolder.getItemName(2);
    document.getElementById("sidebar3").innerHTML = currentFolder.getItemName(3);
    document.getElementById("sidebar4").innerHTML = currentFolder.getItemName(4);
}