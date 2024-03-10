import { delay, dotdotdot, boot_text } from './boot_sequence.js'


async function booting_text() {

    await delay(500);
    let console_paragraph = document.getElementById("console_paragraph");
    console_paragraph.innerHTML = "Booting DAWS v0.1";
    await dotdotdot(console_paragraph, 3);
    await boot_text(console_paragraph);


    

    
    
}

async function setup() {


}




function main() {


    console.log("hello world!")
    booting_text();

}

main();