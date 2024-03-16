import { FolderObject, TextFileObject, EnterPasswordExe, EmptyExe } from './objects.js'

// Folder declarations from top to bottom

export const root = new FolderObject("C:", 0, 0);
root.add_line("# Welcome to Dawson Packer's Personal website");
root.add_line("");
root.add_line("Here you can find my experience, skills,");
root.add_line("hobbies, and more. You also can find");
root.add_line("information about projects I have worked");
root.add_line("on and am working on in the PROJECTS");
root.add_line("directory.");
export const apps = new FolderObject("APPS", 0, root);
export const projects = new FolderObject("PROJECTS", 0, root);




// File declarations
export const aboutMe = new TextFileObject("aboutme.txt", 0);
// aboutMe.add_line("
aboutMe.add_line("# Hi there!");
aboutMe.add_line("");
aboutMe.add_line("I'm Dawson Packer, an undergraduate student");
aboutMe.add_line("at the University of Alaska Anchorage");
aboutMe.add_line("studying computer science.");


export const experience = new TextFileObject("experience.txt", 0);


// Executable declarations
export const emptyExe = new EmptyExe();
export const enterPassword = new EnterPasswordExe("pswrd.exe", 0);



// Adds files and folders to folders
root.addItem(apps);
root.addItem(projects);
root.addItem(aboutMe);
root.addItem(experience);
apps.addItem(enterPassword);
projects.addItem(aboutMe);
