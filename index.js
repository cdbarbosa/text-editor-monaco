import * as monaco from "monaco-editor";

window.editor = monaco.editor.create(document.getElementById("editor-monaco"), {
  value: [
    "- !label \nstart: *ORIGIN \ncolor: 0xFFEEBB \ntext: Pretty vector drawing.",
  ].join("\n"),
  language: "yaml",
});
