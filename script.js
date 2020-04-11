const textarea = '<div class="textarea"><textarea name="name" rows="6" cols="64"></textarea></div>';
const keyboard = '<div class="keyboard"><div id="keyboard__keys"></div></div>';
const language = '<p class="language">Eng</p>';
const body = document.querySelector('body');



body.insertAdjacentHTML('afterbegin', keyboard);
body.insertAdjacentHTML('afterbegin', language);
body.insertAdjacentHTML('afterbegin', textarea); 

const keymap = ["`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "Backspace",
"Tab","q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]", "&frasl;", "Del",
"CapsLock","a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'", "Enter",
    "ShiftLeft", "z", "x", "c", "v", "b", "n", "m", ",", ".", "/","ArrowUp", "ShiftRight",
    "ControlLeft", "MetaRight", "AltLeft", "Space", "ContextMenu", "ArrowLeft", "ArrowDown", "ArrowRight", "ControlRight"];



const keymap2 = ["Backquote", "Digit1", "Digit2", "Digit3", "Digit4", "Digit5", "Digit6", "Digit7", "Digit8", "Digit9", "Digit0", "Minus", "Equal", "Backspace",
"Tab", "KeyQ", "KeyW", "KeyE", "KeyR", "KeyT", "KeyY", "KeyU", "KeyI", "KeyO", "KeyP", "BracketLeft", "BracketRight", "Backslash", "Delete",
"CapsLock","KeyA", "KeyS", "KeyD", "KeyF", "KeyG", "KeyH", "KeyJ", "KeyK", "KeyL", "Semicolon", "Quote", "Enter",
    "ShiftLeft", "KeyZ", "KeyX", "KeyC", "KeyV", "KeyB", "KeyN", "KeyM", "Comma", "Period", "Slash", "ArrowUp", "ShiftRight",
    "ControlLeft", "MetaRight", "AltLeft", "Space", "ContextMenu", "ArrowLeft", "ArrowDown", "ArrowRight", "ControlRight", "Escape"];
  

function keysjoin() {
    let keys = [];

    
    for (let i = 0; i < keymap.length; i++) {       
        if(keymap[i] !=="")
        {keys += '<button class="keyboard__key" data="'+ keymap2[i]+'">' + keymap[i] + '</button>';}    
        if (keymap[i] == "Backspace")
        { keymap[i] = '<i  class="material-icons keyboard__key--big">keyboard_backspace</i>';}
        if (keymap[i] == "Tab")
            { keymap[i] = '<i class="material-icons keyboard__key--middle">keyboard_tab</i>';}   
        if (keymap[i] == "CapsLock")
            {keymap[i] = '<i id = "capsLock" class="material-icons keyboard__key--middle2 keyboard__key--dark keyboard__key--active">keyboard_capslock</i>';}
        if (keymap[i] == "Enter")
            {keymap[i] = '<i class="keyboard__key--middle2">Enter</i>';}
        if (keymap[i] === "ShiftLeft")
            {keymap[i]= '<i class=" keyboard__key--middle2">Shift</i>';}
        if (keymap[i] === "ShiftRight")
           {keymap[i] = '<i class="keyboard__key--middle2">Shift</i>';}
        if (keymap[i] === "ArrowUp")
            {keymap[i]= '<i class="material-icons" style=" transform: rotate(90deg)">arrow_left</i>';}
        if (keymap[i] === "ControlLeft")
            {keymap[i] = '<i class="keyboard__key--small">Ctrl</i>';}
            if (keymap[i] === "ControlRight")
            {keymap[i] = '<i class="keyboard__key--small">Ctrl</i>';}
        if (keymap[i] === "MetaRight")
            {keymap[i]= '<i class="keyboard__key--small">Win</i>';}
        if (keymap[i] === "AltLeft")
        {keymap[i]= '<i class="keyboard__key--small">Alt</i>';}
        if (keymap[i] === "ContextMenu")
            {keymap[i]='<i class="material-icons keyboard__key--small">assignment</i>';}
        if (keymap[i] === "ArrowLeft")
            {keymap[i]= '<i class="material-icons">arrow_left</i>';}
        if (keymap[i] === "ArrowRight")
            {keymap[i]= '<i class="material-icons">arrow_right</i>';}
        if (keymap[i] === "ArrowDown")
            {keymap[i]= '<i class="material-icons" style=" transform: rotate(90deg)">arrow_right</i>';}
        if (keymap[i] === "Space")
            {keymap[i]= '<i class="material-icons keyboard__key--very-big">space_bar</i>';}
      
            document.querySelector('#keyboard__keys').innerHTML = keys;
           
            document.addEventListener('keydown', function(event) {
                if (event.code  !== keymap2[i])
                  {return 0}
                  document.querySelector('#keyboard__keys .keyboard__key[data = "' + event.code + '"]').classList.add("active");        
            });
        
            document.addEventListener('keyup', function(event) {
             
                  document.querySelectorAll ('#keyboard__keys .keyboard__key').forEach(function(element) {
                      element.classList.remove('active');
                    });             
            });
        }
}

 keysjoin();

window.addEventListener("DOMContentLoaded", function () {
    keysjoin();
});
