export default class World {

    message: string

    constructor(message: string) {
        this.message = message
    }

    public sayHellow(elem :HTMLElement | null) {
        if (elem) {
            elem.innerText = this.message
        }
    }
}