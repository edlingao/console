import Global from "./global.js";

export default class Paint{

    static newEmptyLine(){
        const html = `
        <div class="console-line" contenteditable="false">$ \>
            <div class="writable-line" contenteditable="true">
                <div class="writable-word"></div>
                <div class="cursor blink">_</div> 
            </div>
        </div>`;
        return Global.createElement(html);
    }

    static error(description){
        const html = `<div class="error" contenteditable="false" >Error: ${description}</div>`;
        return Global.createElement(html);
    }

    static print(message){
        const html = `<div class="print" contenteditable="false" ></div>`;
        const messageElement = Global.createElement(html);
        messageElement.innerText = message;
        return messageElement; 
    }
}