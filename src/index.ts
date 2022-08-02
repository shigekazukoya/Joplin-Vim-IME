import joplin from 'api';
import { ContentScriptType } from 'api/types';

joplin.plugins.register({
    onStart: async function () {
        const contentScriptId = "fVim";

        await joplin.contentScripts.register(
            ContentScriptType.CodeMirrorPlugin,
            contentScriptId,
            "./codemirror-plugin.js"
        );
        joplin.contentScripts.onMessage(contentScriptId, (message: string) => {
            console.info(
                "PostMessagePlugin (CodeMirror ContentScript): Got message:",
                message
            );
            const response = message + "+responseFromCodeMirrorScriptHandler";
            console.info(
                "PostMessagePlugin (CodeMirror ContentScript): Responding with:",
                response
            );
            return response;
        });
    },
});