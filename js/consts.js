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
aboutMe.add_line("<h2>👋 Hi there!</h2>");
aboutMe.add_line("");
aboutMe.add_line("I'm Dawson Packer, an undergraduate student at the");
aboutMe.add_line("University of Alaska Anchorage studying Computer Science.<br>");
aboutMe.add_line("I am a full-time student, in addition to working part-time at");
aboutMe.add_line("a local firm as a software developer. In my free time, however,");
aboutMe.add_line("I enjoy playing percussion in the Chugiak-Eagle River Community");
aboutMe.add_line("Band and mountain biking with friends.<br>");
aboutMe.add_line("Feel free to explore my website, I had fun making it! 😊");

aboutMe.add_line("<pre>                                                              </pre>");
aboutMe.setNumLines(16);

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

skills.add_line("<table class=\"skillText\"><tr class=\"skillText\"><td class=\"skillText\"><img src=\"../images/python-logo.png\" width=36 alt=\"python logo\"><div>Python</div><div></div></td><td class=\"skillText\"><img src=\"../images/c_cpp-logo.svg\" width=42 alt=\"c/c++ logo\"><div>C/C++</div></td><td class=\"skillText\"><img src=\"../images/autocad-logo.svg\" width=38 alt=\"autocad logo\"><div>AutoCAD</div><div></div></td><td class=\"skillText\"><img src=\"../images/solidworks-logo.png\" width=38 alt=\"solidworks logo\"><div>SolidWorks</div><div></div></td></tr></table>")
// skills.add_line("<div class=\"text\">Even more text</div>")
skills.add_line("Starting my college career pursuing Mechanical Engineering meant");
skills.add_line("that I had learned 2D and 3D modeling software, which was further");
skills.add_line("reinforced by my internship at Taku Engineering. Since then,");
skills.add_line("however, I have been learning and improving in Python and C/C++");
skills.add_line("through the UAA Robotics club, my coursework, personal projects,");
skills.add_line("and work opportunities.");
skills.add_line("<pre>                                                              </pre>");
skills.setNumLines(19);

export const trim = new TextFileObject("trim.txt", 0);
trim.add_line("<h3>Tree-Ring IMager application (TRIM)</h3>");
trim.add_line("Skills:<br><table class=\"projectsSkillText\"><tr><td class=\"skillText\">Python</td></tr></table>");
trim.add_line("Part of my job with UAA ENRI is developing an application to");
trim.add_line("automate the tree core imaging process, where one would take");
trim.add_line("many high-resolution images of a tree core sample along its");
trim.add_line("entire length, and stitch the images together.<br>");
trim.add_line("Prior to this project ENRI staff would have to manually take");
trim.add_line("all the pictures,however my other coworkers and I are developing");
trim.add_line("a solution with a Python application and an arduino-motor setup.");
trim.add_line("We have alreadydeveloped a successful prototype, and are in the");
trim.add_line("works of finalizing the product, fixing bugs, and improving");
trim.add_line("features.");
trim.add_line("<pre>                                                              </pre>");
trim.setNumLines(23);

export const aboutTheClub = new TextFileObject("about.txt", 0);
aboutTheClub.add_line("<h3>UAA Iceberg Robotics</h3>");
aboutTheClub.add_line("UAA Robotics is a student-led and student-driven team of ");
aboutTheClub.add_line("students interested in STEM and robotics in particular.");
aboutTheClub.add_line("The team consists of a range of majors, from Computer Science");
aboutTheClub.add_line("to Mechanical Engineering, though we do not require one to");
aboutTheClub.add_line("be a STEM major to join.<br>");
aboutTheClub.add_line("The team is managed by a task-based system where leads");
aboutTheClub.add_line("create tasks for members to contribute to. Our projects");
aboutTheClub.add_line("are funded via fundraising, grants, and donors.<br>");
aboutTheClub.add_line("I joined in the spring of 2023 as a mechanical-focused member.");
aboutTheClub.add_line("This year I became Treasurer, and became involved with");
aboutTheClub.add_line("the software side of the projects.");
aboutTheClub.add_line("<pre>                                                              </pre>");
aboutTheClub.setNumLines(18);

export const vexU = new TextFileObject("vexu.txt", 0);
vexU.add_line("<h2>VEX U Competition</h2>");
vexU.add_line("Skills:<br><table class=\"projectsSkillText\"><tr><td class=\"skillText\">C++</td></tr></table>");
vexU.add_line("At the start of the Fall 2023 semester, the team");
vexU.add_line("began working on two robots to compete in the Vex");
vexU.add_line("University Competition. This competition involves");
vexU.add_line("building and programming two robots within design");
vexU.add_line("specifications to compete in autonomous and driver-");
vexU.add_line("controlled matches against other university teams.<br>");
vexU.add_line("Following the build phase in the fall, we have competed");
vexU.add_line("in two competitions, a remote event we hosted in January");
vexU.add_line("and the Purdue SigBOTs Slam in Indiana in February");
vexU.add_line("We placed well in both events, winning our remote competition");
vexU.add_line("and placing 12th out of 31 teams in Indiana.<br>");
// vexU.add_line("")
vexU.add_line("<pre>                                                              </pre>");
vexU.setNumLines(25);

export const coffeeBot = new TextFileObject("coffeebot.txt", 0);
coffeeBot.add_line("<h2>CoffeeBot Project</h2>")
coffeeBot.add_line("Skills:<br><table class=\"projectsSkillText\"><tr><td class=\"skillText\">Python</td><td class=\"skillText\">C</td></tr></table>");
coffeeBot.add_line("During the pandemic, a coffee shop inside UAA's Engineering");
coffeeBot.add_line("& Industry Building (EIB) closed down permanently. Now, UAA");
coffeeBot.add_line("Robotics is proposing and in the process of building a coffee-");
coffeeBot.add_line("serving robotic arm to replace the closed shop.<br>");
coffeeBot.add_line("The semester I joined saw a proof-of-concept model built out of");
coffeeBot.add_line("3D-printed parts. Now, the team is at full swing developing a");
coffeeBot.add_line("full-scale solution.")
coffeeBot.add_line("<pre>                                                              </pre>");
coffeeBot.setNumLines(21);

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
projects.addItem(trim);
projectsRobotics.addItem(aboutTheClub);
projectsRobotics.addItem(vexU);
projectsRobotics.addItem(coffeeBot);
