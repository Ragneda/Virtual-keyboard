const textarea = '<div class="textarea"><textarea name="name" rows="6" cols="64"></textarea></div>';
const keyboard = '<div class="keyboard"><div id="keyboard__keys"></div></div>';
const language = '<p class="language">Eng</p>';
let english = localStorage.getItem('english');
const body = document.querySelector('body');


body.insertAdjacentHTML('afterbegin', keyboard);
body.insertAdjacentHTML('afterbegin', language);
body.insertAdjacentHTML('afterbegin', textarea);


const keymap = [96, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 45, 61, "Backspace",
    "Tab", 113, 119, 101, 114, 116, 121, 117, 105, 111, 112, 91, 93, 92, "Del",
    "Caps", 97, 115, 100, 102, 103, 104, 106, 107, 108, 59, 39, "Enter",
    "Shift", 122, 120, 99, 118, 98, 110, 109, 44, 46, 47, "arrow^", "Shift2",
    "Ctrl", "Win", "Alt", 32, "Alt", "arrow<", "arrow", "arrow>", "Ctrl"]

function keysjoin() {
    let keys = '';

    for (let i = 0; i < keymap.length; i++) {
        if (keymap[i] !== "Backspace" && keymap[i] !== "Tab" && keymap[i] !== "Del" && keymap[i] !== "Caps"
            && keymap[i] !== "Enter" && keymap[i] !== "Shift" && keymap[i] !== "arrow^" && keymap[i] !== "Ctrl"
            && keymap[i] !== "Win" && keymap[i] !== "Alt" && keymap[i] !== "arrow<" && keymap[i] !== "arrow"
            && keymap[i] !== "arrow>" && keymap[i] !== 32 && keymap[i] !== "Shift2")
            {keys += '<button class="keyboard__key">' + String.fromCharCode(keymap[i]) + '</button>';}
        if (keymap[i] === "Backspace")
            {keys += '<button class="keyboard__key keyboard__key--big"><i class="material-icons">keyboard_backspace</i></button>';}
        if (keymap[i] === "Tab")
            {keys += '<button class="keyboard__key keyboard__key--middle"><i class="material-icons">keyboard_tab</i></button>';}
        if (keymap[i] === "Del")
            {keys += '<button class="keyboard__key">Del</button>';}
        if (keymap[i] === "Caps")
            {keys += '<button class="keyboard__key keyboard__key--middle2 keyboard__key--active"><i class="material-icons">keyboard_capslock</i></button>';}
        if (keymap[i] === "Enter")
            {keys += '<button class="keyboard__key keyboard__key--big">Enter</button>';}
        if (keymap[i] === "Shift")
            {keys += '<button class="keyboard__key keyboard__key--middle2">Shift</button>';}
        if (keymap[i] === "Shift2")
           {keys += '<button class="keyboard__key keyboard__key--big">Shift</button>';}
        if (keymap[i] === "arrow^")
            {keys += '<button class="keyboard__key"><i class="material-icons" style=" transform: rotate(90deg)">arrow_left</i></button>';}
        if (keymap[i] === "Ctrl")
            {keys += '<button class="keyboard__key keyboard__key--middle">Ctrl</button>';}
        if (keymap[i] === "Win")
            {keys += '<button class="keyboard__key keyboard__key--middle">Win</button>';}
        if (keymap[i] === "Alt")
            {keys += '<button class="keyboard__key keyboard__key--middle">Alt</button>';}
        if (keymap[i] === "arrow<")
            {keys += '<button class="keyboard__key"><i class="material-icons">arrow_left</i></button>';}
        if (keymap[i] === "arrow>")
            {keys += '<button class="keyboard__key "><i class="material-icons">arrow_right</i></button>';}
        if (keymap[i] === "arrow")
            {keys += '<button class="keyboard__key "><i class="material-icons" style=" transform: rotate(90deg)">arrow_right</i></button>';}
        if (keymap[i] === 32)
            {keys += '<button class="keyboard__key keyboard__key--very-big"><i class="material-icons">space_bar</i></button>';}
    }

    document.querySelector('#keyboard__keys').innerHTML = keys;

}



window.addEventListener("DOMContentLoaded", function () {
    keysjoin();
});
