import { python } from "@codemirror/lang-python";
import { javascript } from "@codemirror/lang-javascript";

export default {
    python: [python()],
    javascript: [javascript({ jsx: true })],
};
