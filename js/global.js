
export default class Global{

    /**
     * Creates an html element with the formmated hmtl string
     * @param { string } html html formated string (Only 1 container)
     */
    static createElement(html) {
        const div = document.createElement('div');
        div.innerHTML = html;
        return div.firstElementChild;
    }
}