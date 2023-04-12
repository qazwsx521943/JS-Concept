const kb = document.getElementById("key-board");
const colorMode = document.getElementById("colorMode");
const kb_row = document.getElementsByClassName("kb-row");
const displayText = document.getElementById("listen");
let KB_KEY = ["qwertyuiop[]←", "asdfghjkl;'", "zxcvbnm,./", " "];
KB_KEY = KB_KEY.map((row) => row.split(""));

// functions
const addElement = (data) => {
    console.log(data);
    const newDiv = document.createElement("div");
    const newKbd = document.createElement("kbd");
    newDiv.classList.add("rounded", "key", `${data === " " ? "space" : "rounded"}`);
    newDiv.setAttribute("data-key", `${data}`);
    newKbd.classList.add("key-display");
    newKbd.innerText = `${data === " " ? "White Space" : data.toUpperCase()}`;
    newDiv.appendChild(newKbd);
    return newDiv;
};

function removeTransition(e) {
    if (e.propertyName !== "background-color") return;
    this.classList.remove("playing");
}

function keyReaction(e) {
    if (e.key === "Shift") return;
    const regex = /[a-z\s]{1}/;
    // if (!regex.test(e.key) || e.key.length > 1) return;
    const text =
        e.key === " "
            ? displayText.innerText + "&nbsp;"
            : e.key === "Backspace"
            ? displayText.innerText.slice(0, -1)
            : displayText.innerText + e.key;
    const pressed = document.querySelector(`div[data-key="${e.key.toLowerCase()}"]`);
    const audio = document.querySelector(".effect");
    displayText.innerHTML = text;
    audio.currentTime = 0;
    pressed.classList.add("playing");
    audio.play();
}

// DOM insert
const kb_html = KB_KEY.map((row) => row.map((el) => addElement(el)));

for (const [key, el] of kb_html.entries()) {
    for (const i of el) {
        kb_row[key].appendChild(i);
    }
}
// EventListeners
colorMode.addEventListener("click", function (e) {
    const mainDiv = document.querySelector(".black-ground");
    mainDiv.classList.toggle("gray");
});

window.addEventListener("keydown", keyReaction);

const keys = document.querySelectorAll(".key");
keys.forEach((key) => {
    key.addEventListener("transitionend", removeTransition);
    key.addEventListener("mousedown", keyReaction);
});

console.log(/., '^\D$'/.test("Tab"));
