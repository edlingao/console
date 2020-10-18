import Commands from "./commands.js";
/**
 * A dictionary of commands
 */
export default {
    'echo': (word) => Commands.echo(word),
    'clear': () => Commands.clear(),
    'easter': () => Commands.easter()
}