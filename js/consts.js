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
export const projectsRobotics = new FolderObject("ROBOTICS", 0, projects);




// File declarations
export const emptyText = new TextFileObject("null", 0);

export const aboutMe = new TextFileObject("aboutme.txt", 0);
// aboutMe.add_line("
aboutMe.add_line("# Hi there!");
aboutMe.add_line("");
aboutMe.add_line("I'm Dawson Packer, an undergraduate student");
aboutMe.add_line("at the University of Alaska Anchorage");
aboutMe.add_line("studying computer science.");

export const experience = new TextFileObject("experience.txt", 0);
experience.add_line("<h2>Work Experience</h2>");
experience.add_line("<div style=\"text-align: center;\"><---Present---></div>");
experience.add_line("<table><tr><td class=\"experienceLogo\"><img src=\"../images/beadedstream.png\" width=150 alt=\"beadedstream logo\"></td><td class=\"experienceText\"><h3>Embedded Software Developer</h3><div>> Beadedstream (2/5/24-Present)<br><br>Building and improving features of factory<br>applications and testing firmware for<br>digital temperature cable data loggers.</div></td></tr></table>")
experience.add_line("<table><tr><td class=\"experienceText\"><h3>Automation Developer</h3><div>> UAA Environment and Natural<br>> Resources Institute (12/23-Present)<br><br>Automated a tree core imaging process<br>using a motor and arduino, and<br>a custom-built application.</div></td><td class=\"experienceLogo\"><img src=\"../images/uaa-logo.png\" width=150 alt=\"uaa logo\"></td></tr></table>")
experience.add_line("<table><tr><td class=\"experienceLogo\"><img src=\"../images/taku-logo.jpg\" width=150 alt=\"taku engineering logo\"></td><td class=\"experienceText\"><h3>CP/CIS Intern</h3><div>> Taku Engineering, LLC (5/30/23-8/21/23)<br><br>Drafted demolition design drawings, helped<br>perform STI tank inspections on the North Slope,<br>and assisted with a large CP and CIS survey.</div></td></tr></table>")
experience.add_line("<pre>                                                              </pre>");
experience.setNumLines(42);

export const skills = new TextFileObject("skills.txt", 0);
skills.add_line("<h2>Skills I've used in projects</h2>");

skills.add_line("<table class=\"skillText\"><tr class=\"skillText\"><td class=\"skillText\"><img src=\"../images/python-logo.png\" width=36 alt=\"python logo\"><div>Python</div><div></div></td><td class=\"skillText\"><img src=\"../images/c_cpp-logo.svg\" width=42 alt=\"c/c++ logo\"><div>C/C++</div></td><td class=\"skillText\"><img src=\"../images/autocad-logo.svg\" width=38 alt=\"autocad logo\"><div>AutoCAD</div><div></div></td></tr></table>")
skills.add_line("<div class=\"text\">Even more text</div>")
skills.add_line("<pre>                                                              </pre>");
skills.setNumLines(18);

export const vexU = new TextFileObject("vexu_competition.txt", 0);
vexU.add_line("<h2>VEX U Competition</h2>");
// Place skills in boxes here
vexU.add_line("At the start of the Fall 2023 semester, ")

vexU.add_line("<pre>                                                              </pre>");
vexU.setNumLines(20);


// Executable declarations
export const emptyExe = new EmptyExe();
export const enterPassword = new EnterPasswordExe("pswrd.exe", 0);



// Adds files and folders to folders
// root.addItem(apps);
root.addItem(projects);
root.addItem(aboutMe);
root.addItem(experience);
root.addItem(skills);
apps.addItem(enterPassword);
projects.addItem(projectsRobotics);
projectsRobotics.addItem(vexU);
