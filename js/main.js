import { sidebar0_pressed, sidebar1_pressed,
        sidebar2_pressed, sidebar3_pressed,
        sidebar4_pressed } from './events.js'
import { delay, dotdotdot, boot_text } from './boot_sequence.js'
import { reloadWindow, setRootFolder } from './display.js';

async function booting_text() {

    await delay(500);
    let console_paragraph = document.getElementById("console_paragraph");
    console_paragraph.innerHTML = "Booting DAWS v0.1";
    await dotdotdot(console_paragraph, 3);
    await boot_text(console_paragraph);


    

    
    
}

async function setup() {

    let console_paragraph = document.getElementById("console_paragraph");
    console_paragraph.innerHTML = "";
    // let background = document.getElementById("background");
    // background.innerHTML = ".――[ DAWS v0.1 ]――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――.<br>" +
    //                        "|  Logged in as USER with permission level 1                                          |<br>" +
    //                        "|=====================================================================================|<br>" +
    //                        "| > C:/                                                                               |<br>" +
    //                        "|―――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――|<br>" +
    //                        "|                  |           |                                                     |<br>" +
    //                        "|                  |           |                                                     |<br>" +
    //                        "|                  |           |                                                     |<br>" +
    //                        "|                  |           |                                                     |<br>" +
    //                        "|                  |           |                                                     |<br>" +
    //                        "|                  |           |                                                     |<br>" +
    //                        "|                  |           |                                                     |<br>" +
    //                        "|                  |           |                                                     |<br>" +
    //                        "|                  |           |                                                     |<br>" +
    //                        "|                  |           |                                                     |<br>" +
    //                        "|                  |           |                                                     |<br>" +
    //                        "|                  |           |                                                     |<br>" +
    //                        "|                  |           |                                                     |<br>" +
    //                        "|                  |           |                                                     |<br>" +
    //                        "|                  |           |                                                     |<br>" +
    //                        "|                  |           |                                                     |<br>" +
    //                        "|                  |           |                                                     |<br>" +
    //                        "|                  |           |                                                     |<br>" +
    //                        "|                  |           |                                                     |<br>" +
    //                        "|                  |           |                                                     |<br>" +
    //                        "|                  |           |                                                     |<br>" +
    //                        "|                  |           |                                                     |<br>" +
    //                        "|                  |           |                                                     |<br>" +
    //                        "|                  |           |                                                     |<br>" +
    //                        "|                  |           |                                                     |<br>" +
    //                        "|                  |           |                                                     |<br>" +
    //                        "|                  |           |                                                     |<br>" +
    //                        "|                  |           |                                                     |<br>" +
    //                        "|                  |           |                                                     |<br>" +
    //                        "|                  |           |                                                     |<br>" +
    //                        "|                  |           |                                                     |<br>" +
    //                        "|                  |           |                                                     |<br>" +
    //                        "|                  |           |                                                     |<br>" +
    //                        "|                  |           |                                                     |<br>" +
    //                        "|                  |           |                                                     |<br>" +
    //                        "'―――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――'"
 
    // document.getElementById("sidebar0").onClick = function() {
    //     test(document.getElementById("sidebar0"));
    // };
    document.getElementById("sidebarElement0").onclick = sidebar0_pressed;
    document.getElementById("sidebarElement1").onclick = sidebar1_pressed;
    document.getElementById("sidebarElement2").onclick = sidebar2_pressed;
    document.getElementById("sidebarElement3").onclick = sidebar3_pressed;
    document.getElementById("sidebarElement4").onclick = sidebar4_pressed;
    setRootFolder();
    reloadWindow();
    // document.getElementById("main_content").innerHTML = "hi";
}




async function main() {


    console.log("hello world!")
    // await booting_text();
    await setup();
}

main();