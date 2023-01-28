import AppController from "../AppController/AppController";

class StackStructure {
    elements: number[];
    isUnlimited: boolean;
    isLocked: boolean = false;

    constructor(size?: number) {
        this.elements = [];

        this.isUnlimited = (size ? true : false); // if size is defined, then the stack is not unlimited

    }

    push(value: number) {
        if (this.isLocked) return;

        this.elements.push(value);

        AppController.onPush(value);
    }

    pop() {
        if (this.isLocked) return;

        AppController.onPop();
    }

    lock() {
        this.isLocked = true;
    }

    unlock() {
        this.isLocked = false;
    }
}

export default StackStructure;