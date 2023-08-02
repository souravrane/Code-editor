import React, { useState } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { dracula } from "@uiw/codemirror-theme-dracula";
import languageExtension from "./config/extension";
import snippets from "./config/snippets";

function CodeEditor() {
    const [code, setCode] = useState(snippets.python);
    const [lang, setLang] = useState("python");

    const onChange = (value) => {
        setCode(value);
        console.log(code);
    };

    const onLangChange = (event) => {
        const lang = event.target.value;
        setLang(lang);
        setCode(snippets[lang]);
    };

    return (
        <div className="absolute top-20 bottom-40 left-10 right-10 max-w-4xl mx-auto">
            <div className="mb-8">Create a function that adds two numbers.</div>

            <select
                name="language"
                id="language"
                className="absolute right-0 top-7 text-black px-1"
                onChange={onLangChange}
            >
                <option value="python">Python</option>
                <option value="javascript">JavaScript</option>
            </select>

            <CodeMirror
                className="border-dotted border-white border-2"
                value={code}
                height="500px"
                width="100%"
                readOnly={false}
                theme={dracula}
                extensions={languageExtension[lang]}
                onChange={onChange}
            />
        </div>
    );
}

export default CodeEditor;
