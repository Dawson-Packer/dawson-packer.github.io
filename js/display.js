import { root, apps } from './consts.js'

var currentFolder;
var currentFile;

export async function setRootFolder() {
    currentFolder = root;
    currentFile = root;
}

export async function reloadWindow() {
    loadSidebar();

}

function loadSidebar() {
    document.getElementById("sidebar0").innerHTML = currentFolder.getItemName(0);
    document.getElementById("sidebar1").innerHTML = currentFolder.getItemName(1);
    document.getElementById("sidebar2").innerHTML = currentFolder.getItemName(2);
    document.getElementById("sidebar3").innerHTML = currentFolder.getItemName(3);
    document.getElementById("sidebar4").innerHTML = currentFolder.getItemName(4);
}