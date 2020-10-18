import dictionary from './dictionary.js';
import Paint from './paint.js';

export default class Console {

    /**
     * Generates the needed events for the console
     */
    static events(){
        let command = '';
        const consoleElement = document.querySelector('.console');
        consoleElement.addEventListener('click', () => {
            const lastLine = this.findLastLine();
            const writableArea = lastLine.querySelector('.writable-word');
            writableArea.focus();
        })
        consoleElement.addEventListener('keydown', (e) => {
            e.preventDefault();
            command = this.writeEvent(e, command);
        });
    }

    /**
     * Writes, deletes or executes the commmand
     * @param { string } key The keyboard key
     * @param { string } command The entire word on the consol
     */
    static writeEvent(key, command) {
        let newWord = false;
        const lastLine = this.findLastLine();
        const writableArea = lastLine.querySelector('.writable-word');
        let specialChar = this.detectSpecialChar(key.key);
        switch( key.key ){
          case ' ':
            newWord = true;
            command += ' ';
            writableArea.innerText += '\u00A0'; 
          break;
          case 'Enter':
            specialChar = true;
            this.executeCommand(command);
            command = '';
          break;
          case 'Backspace':
            command = this.deleteAction(key.ctrlKey, command, writableArea)
          break;
        }
        if(!specialChar){
            command += key.key;
            writableArea.innerText += key.key;
        }
        return command;
    }

    /**
     * 
     * @param { bool} ctrlKey Weather if the ctrlKey is being pressed
     * @param { string } command The entire phrase wrtten on the console 
     * @param { Element } writableArea THe writtable line element
     */
    static deleteAction( ctrlKey = false, command, writableArea){
        if(ctrlKey){
            
            let newWord = '';

            const formatedWord = command.split(' ').map( (word, index) => {
                if(index != command.split(' ').length - 1 ){
                    return word;
                }
                else{
                    return 'DELETED';
                }
            });

            formatedWord.forEach( (word, index) => {
                if(word != 'DELETED' && index != formatedWord.length - 1){
                    if(formatedWord[index + 1] != 'DELETED'){
                        newWord += `${word} `;
                    }
                    else{
                        newWord += word;
                    }
                }else{
                    if(word != 'DELETED' && index == formatedWord.length - 1){
                        newWord += word;  
                    }
                } 
            });

            writableArea.innerText = newWord;
            command = newWord;
        }else{
            writableArea.innerText = writableArea.innerText.slice(0, -1); 
            command = command.slice(0, -1);
        }
        return command;
    }

    /**
     * Gets the last line on the DOM
     */
    static findLastLine(){
        const lastLineElements = document.querySelectorAll('.writable-line')
        const lastLine = lastLineElements[lastLineElements.length - 1];
        return lastLine;
    }
    /**
     * Executes de written command if founded, if not an error message is shown
     * @param { string } command The entire phrase
     */
    static executeCommand(command){
        const lastLine = this.findLastLine();
        const instructionCommand = command.split(' ')[0];
        const consoleContainer = document.querySelector('.console');
        const newLine = Paint.newEmptyLine();
        const commandName = command.split(' ')[0];
        lastLine.setAttribute('contenteditable', 'false');

        lastLine.querySelector('.cursor') != null ?
            lastLine.querySelector('.cursor').remove() :
            null;
        if(dictionary[commandName] == null){
            consoleContainer.appendChild(Paint.error('Command not found'));
        }else{
            const params = [];
            command.split(' ').forEach( word => word != commandName ? params.push(word) : null);
            dictionary[commandName](params);
        }
        consoleContainer.appendChild(newLine);
        this.findLastLine().focus();
    }

    /**
     * Checks if the given character is a special Character
     * @param { string } char The typen character
     */
    static detectSpecialChar( char ){
        let specialChar = false;
        switch( char ){
            case 'ArrowUp':
              specialChar = true;
            break;
            
            case 'ArrowDown':
              specialChar = true;
            break;
            
            case 'ArrowLeft':
              specialChar = true;
            break;
            
            case 'ArrowRight':
              specialChar = true;
            break;
            
            case 'CapsLock':
              specialChar = true;
            break;
            
            case 'Shift':
              specialChar = true;
            break;
            
            case 'Alt':
              specialChar = true;
            break;
            
            case 'Tab':
              specialChar = true;
            break
            
            case 'NumLock':
              specialChar = true;
            break
            case 'Clear':
              specialChar = true;
            break
            case ' ':
              specialChar = true;
            break;
            case 'Enter': 
              specialChar = true;
            break;
            case 'Control':
              specialChar = true;  
            break;
            case 'Backspace':
              specialChar = true;
            break;
            case 'Escape':
                specialChar = true;
            break;
          }
        return specialChar;
    }
}




