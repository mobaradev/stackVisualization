import AppController from "../AppController/AppController";

class StackStructure {
    elements: number[];
    isUnlimited: boolean;

    constructor(size?: number) {
        this.elements = [];

        this.isUnlimited = (size ? true : false); // if size is defined, then the stack is not unlimited

    }

    push(value: number) {
        this.elements.push(value);

        AppController.onPush(value);
    }

    pop() {
        AppController.onPop();
    }
}

export default StackStructure;