import { FolderObject, TextFileObject } from './objects.js'

// Folder declarations from top to bottom

export const root = new FolderObject("C:", 0, 0);
export const apps = new FolderObject("APPS", 0, root);




// File declarations
export const aboutMe = new TextFileObject("aboutme.txt", 0);



// Adds files and folders to folders
root.addItem(apps);
root.addItem(aboutMe);