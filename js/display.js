import { root, apps, emptyExe, emptyText } from './consts.js'
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
        setCurrentFile(emptyText);
        setCurrentExe(emptyExe);
    }
    else if (sidebarElement.getType() == "upFolder") {
        console.log("Going up!");
        setCurrentFolder(sidebarElement.object);
        setCurrentFile(emptyText);
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
    currentFile = emptyText;
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

export async function closeFile() {
    setCurrentFile(emptyText);
    reloadWindow();
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
    let backgroundContent = ".――[ DAWS v0.1 ]――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――.<br>" +
                            // "|&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&|▊<br>" +
                            "|=====================================================================================|▊<br>" +
                            // "|                                                                                     |▊<br>" +
                            pathLine +
                            "|―――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――|▊<br>" +
                            "|                                                                                     |▊<br>" +
                            "|                                                                                     |▊<br>" +
                            "|                                                                                     |▊<br>" +
                            "|                                                                                     |▊<br>" +
                            "|                                                                                     |▊<br>" +
                            "|                                                                                     |▊<br>" +
                            "|                                                                                     |▊<br>" +
                            "|                                                                                     |▊<br>" +
                            "|                                                                                     |▊<br>" +
                            "|                                                                                     |▊<br>" +
                            "|                                                                                     |▊<br>" +
                            "|                                                                                     |▊<br>" +
                            "|                                                                                     |▊<br>" +
                            "|                                                                                     |▊<br>" +
                            "|                                                                                     |▊<br>" +
                            "|                                                                                     |▊<br>" +
                            "|                                                                                     |▊<br>" +
                            "|                                                                                     |▊<br>" +
                            "|                                                                                     |▊<br>" +
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
                            "|                                                                                     |▊<br>" +
                            "|                                                                                     |▊<br>" +
                            "|                                                                                     |▊<br>" +
                            "'―――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――'▊<br>";
    if (navigator.platform == "Win32") {
        backgroundContent += " ▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇";
    }
    else if (navigator.platform == "MacIntel") {
        backgroundContent += " ▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇'";
    }
    console.log(navigator);
                            
    background.innerHTML = backgroundContent

    // loadPreview();
    loadTextOverlay();
    loadSidebar();

}

// function loadPreview() {
//     let preview_text = "";
//     for (let i = 0; i < currentFile.contents.length; ++i) {
//         console.log(currentFile.contents[i]);
//         preview_text = preview_text + currentFile.contents[i] + "<br>";
//     }
//     // document.getElementById("preview").innerHTML = preview_text;
// }

async function adjustColor(element, textColor, shadowColor) {
    element.style.color = textColor;
    element.style.textShadow = "0 0 5px " + shadowColor + ", 0 0 10px " + shadowColor + ", 0 0 20px " + shadowColor + ", 0 0 30px " + shadowColor;
}

async function loadTextOverlay() {
    if (currentFile.contents.length != 0) {
        document.getElementById("background").style.filter = "blur(1rem)";
        document.getElementById("main_content").style.filter = "blur(1rem)";
        adjustColor(document.getElementById("background"), "#53545b", "#53545b");
        adjustColor(document.getElementById("sidebar0"), "#53545b", "#53545b");
        adjustColor(document.getElementById("sidebar1"), "#53545b", "#53545b");
        adjustColor(document.getElementById("sidebar2"), "#53545b", "#53545b");
        adjustColor(document.getElementById("sidebar3"), "#53545b", "#53545b");
        adjustColor(document.getElementById("sidebar4"), "#53545b", "#53545b");
        adjustColor(document.getElementById("sidebar5"), "#53545b", "#53545b");
        adjustColor(document.getElementById("sidebar6"), "#53545b", "#53545b");
        adjustColor(document.getElementById("sidebar7"), "#53545b", "#53545b");
        document.getElementById("previewCloseButton").innerHTML = "Close X";
        document.getElementById("overlay").style.gridArea = "main_window";
        let backgroundContent = "<pre>" +
                                ".――[ " +
                                currentFile.getName() + " ]";
        for (let i = 0; i < 64 - currentFile.getName().length; i++) backgroundContent += "―";
        backgroundContent += ".<br>";
        console.log(currentFile.numLines());
        for (let i = 0; i < currentFile.numLines(); i++) backgroundContent += "|                                                                      |<br>";
           backgroundContent += "|                                                                      |<br>" +
                                "|______________________________________________________________________|" +
                                "</pre>";
        document.getElementById("overlayBackground").innerHTML = backgroundContent;
                            let preview_text = "";
        for (let i = 0; i < currentFile.contents.length; ++i) {
            console.log(currentFile.contents[i]);
            preview_text = preview_text + currentFile.contents[i] + "<br>";
        }
        document.getElementById("overlayText").innerHTML = preview_text;
    }
    else {
        document.getElementById("background").style.filter = "blur(0)";
        document.getElementById("main_content").style.filter = "blur(0)";
        document.getElementById("overlay").style.gridArea = "corner";
        document.getElementById("overlayText").innerHTML = "";
        document.getElementById("overlayBackground").innerHTML = "";
        adjustColor(document.getElementById("background"), "#d4d7e2", "#c4cde9");
        adjustColor(document.getElementById("sidebar0"), "#d4d7e2", "#c4cde9");
        adjustColor(document.getElementById("sidebar1"), "#d4d7e2", "#c4cde9");
        adjustColor(document.getElementById("sidebar2"), "#d4d7e2", "#c4cde9");
        adjustColor(document.getElementById("sidebar3"), "#d4d7e2", "#c4cde9");
        adjustColor(document.getElementById("sidebar4"), "#d4d7e2", "#c4cde9");
        adjustColor(document.getElementById("sidebar5"), "#d4d7e2", "#c4cde9");
        adjustColor(document.getElementById("sidebar6"), "#d4d7e2", "#c4cde9");
        adjustColor(document.getElementById("sidebar7"), "#d4d7e2", "#c4cde9");
        document.getElementById("previewCloseButton").innerHTML = "";
    }
    
}

function loadSidebar() {
    let box_bottom = "──────────────";
    let sidebar0_name = currentFolder.getItemName(0);
    let spaces = "";
    for (let i = 0; i < 12 - sidebar0_name.length; i++) {
        spaces += " ";
    }
    for (let i = 0; i < 8; i++) loadSidebarElement(i);
}

function loadSidebarElement(index) {
    let element = document.getElementById("sidebar" + index);
    let item = currentFolder.getItem(index);
    let content = "";
    if (item.getType() == "folder" || item.getType() == "upFolder") {
        content += " __        <br>";
        content += "|  '――――――.<br>";
        content += "|         |<br>";
        content += "|_________|<br><br>";
        content += item.getName(); 
    }
    else if (item.getType() == "text") {
        content += " _____ <br>";
        content += "|==== \\<br>";
        content += "|===  |<br>";
        content += "|_____|<br><br>";
        content += item.getName(); 
    }
    else if (item.getType() == "executable") {
        content += ".☐☐☐======.<br>"; // TODO: <---- Make this Mac/Windows specific
        content += "| > exec  |<br>";
        content += "|         |<br>";
        content += "|_________|<br><br>";
        content += item.getName(); 
    }
    element.innerHTML = content;
}