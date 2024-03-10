export const delay = (time) => new Promise(res => setTimeout(res, time));
// Code courtesy of https://stackoverflow.com/questions/14226803/wait-5-seconds-before-executing-next-line
export async function dotdotdot(element, num) {
    function add_dot() {
        let content = document.createTextNode(". ");
        element.appendChild(content);
    }
    for (let i = 0; i < num; i++) {
        await delay(250);
        add_dot();
    }
}

export const append_to_element = (element, text) => {
    element.innerHTML = element.innerHTML + text;
}

export async function boot_text(element) {
    await delay(1000);
    append_to_element(element, "<br>Starting background task managers");
    await delay(300);
    append_to_element(element, "<br>Executing start-up tasks in order of priority");
    await delay(700);
    append_to_element(element, "<br>Checking priority buses for connections");
    await delay(800);
    // append_to_element(element, "<br>PORT0 > Failed to respond<br>");
    // await delay(300);
    // append_to_element(element, "<br>PORT1 > Failed to respond<br>");
    // await delay(500);
    // append_to_element(element, "<br>PORT2 > Failed to respond<br>");
    // await delay(200);
    // append_to_element(element, "<br>System running. Loading main gui");
    // await delay(200);
    // append_to_element(element, "<br>Starting file viewer manager");
    // append_to_element(element, "<br>[");
    // await delay(10);
    // let loading_bar = "[                                                  ]";
    // append_to_element(element, "==");
    append_to_element(element, "<br>System running. Runnings tasks in startup directory. . .");
    await delay(400);
    append_to_element(element, "<br>Starting file manager. . .");
    await delay(1000);


    

}