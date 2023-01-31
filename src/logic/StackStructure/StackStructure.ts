import AppController from "../AppController/AppController";
import Random from "../Random/Random";

class StackStructure {
    elements: number[];
    operationsCounter: number;
    isLocked: boolean = false;

    constructor() {
        this.elements = [];
        this.operationsCounter = 0;

        this.reload();
    }

    randomize() {
        const n = Random.getRandomNumber(2, 8);
        for (let i = 0; i < n; i++) {
            this.elements.push(Random.getRandomNumber(0, 50));
        }
        this.reload();
    }

    reload() {
        setTimeout(() => {
            AppController.onStackReload();
            AppController.onStackUpdate();
        });
    }

    push(value: number) {
        if (this.isLocked) return;

        this.elements.push(value);
        this.operationsCounter++;

        AppController.onPush(value);
        AppController.onStackUpdate();
    }

    pop() {
        if (this.isLocked) return;

        this.elements.pop();
        this.operationsCounter++;

        AppController.onPop();
        AppController.onStackUpdate();
    }

    lock() {
        this.isLocked = true;
    }

    unlock() {
        this.isLocked = false;
    }
}

export default StackStructure;