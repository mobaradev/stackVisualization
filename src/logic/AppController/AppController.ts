import StackStructure from "../StackStructure/StackStructure";

class AppController {
    static stack: StackStructure;
    static onPush: (value: number) => void;
    static onPop: () => void;
    static onTop: () => void;
    static onStackUpdate: () => void;
    static onStackReload: () => void;

    static version: string;

    static init() {
        AppController.version = "1.00"
        AppController.stack = new StackStructure();
    }
}

export default AppController;