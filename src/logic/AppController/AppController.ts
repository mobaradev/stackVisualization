import StackStructure from "../StackStructure/StackStructure";

class AppController {
    static stack: StackStructure;
    static onPush: (value: number) => void;
    static onPop: () => void;

    static init() {
        AppController.stack = new StackStructure();
    }
}

export default AppController;