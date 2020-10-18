import Paint from "./paint.js";

export default class Commands{

    /**
     * This command prints whatever you send into the console
     * @param { string } params A message to print
     */
    static echo( params ){
        const consoleElement = document.querySelector('.console');
        let newWord = ``;
        params.forEach( word => {
            newWord += word + ' ';
        });
        consoleElement.appendChild(Paint.print(newWord));
    }
    /**
     * Clears the console screen
     */
    static clear(){
        const consoleElement = document.querySelector('.console');
        consoleElement.innerHTML = '';
    }
    /**
     * Shows a comedic message and changes the color of the console
     */
    static easter(){
        const consoleElement = document.querySelector('.console');
        consoleElement.classList.toggle('matrix');
        if(consoleElement.classList.contains('matrix')){
            consoleElement.appendChild(Paint.print('Welcom Creator\nWhat are we building today?'))
        }else{
            consoleElement.appendChild(Paint.print('Goodbye...'))
        }
    }
}