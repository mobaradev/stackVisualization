import AppController from "../AppController/AppController";
import Random from "../Random/Random";

class StackStructure {
    elements: number[];
    isLocked: boolean = false;

    constructor() {
        this.elements = [];

        this.reload();
    }

    randomize() {
        const n = Random.getRandomNumber(2, 8);
        for (let i = 0; i < n; i++) {
            this.elements.push(Random.getRandomNumber(0, 50));
        }
        console.log('randomized')
        this.reload();
    }

    reload() {
        setTimeout(() => {
            AppController.onStackReload();
        });
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