import { currentFolder, currentFile, setCurrentFolder, reloadWindow } from "./display.js";

export async function sidebar0_pressed() {
    console.log("Sidebar0 pressed");
    sidebar_element_pressed(0);
}

export async function sidebar1_pressed() {
    console.log("Sidebar1 pressed");
    sidebar_element_pressed(1);
}

export async function sidebar2_pressed() {
    console.log("Sidebar2 pressed");
    sidebar_element_pressed(2);
}

export async function sidebar3_pressed() {
    console.log("Sidebar3 pressed");
    sidebar_element_pressed(3);
}

export async function sidebar4_pressed() {
    console.log("Sidebar4 pressed");
    sidebar_element_pressed(4);
}

async function sidebar_element_pressed(index) {
    if (currentFolder.getItem(index).getType() == "text") {
        console.log("Opening a text file");
    }
    else if (currentFolder.getItem(index).getType() == "folder") {
        console.log("Opening a folder");
        setCurrentFolder(currentFolder.getItem(index));
    }
    else if (currentFolder.getItem(index).getType() == "upFolder") {
        console.log("Going up!");
        setCurrentFolder(currentFolder.getItem(index).object);
    }
    reloadWindow();
}