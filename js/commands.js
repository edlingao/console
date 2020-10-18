import Paint from "./paint.js";

export default class Commands{

    static echo( params ){
        const consoleElement = document.querySelector('.console');
        let newWord = ``;
        params.forEach( word => {
            newWord += word + ' ';
        });
        consoleElement.appendChild(Paint.print(newWord));
    }

    static clear(){
        const consoleElement = document.querySelector('.console');
        consoleElement.innerHTML = '';
    }
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