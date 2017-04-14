'use strict';
import * as vscode from 'vscode';
const config = vscode.workspace.getConfiguration('duplicateLineSwitchWord') || {};
const WORD_ARR: string[] = config["pattern"];
export function activate(context: vscode.ExtensionContext) {
    console.log('Congratulations, your extension "duplicate switch" is now active!');
    let disposable = vscode.commands.registerCommand('extension.duplicateLineSwitchWord', () => {
        const editor = vscode.window.activeTextEditor;
        const document = editor.document;
        if (editor.selection.isEmpty) {
            const position = editor.selection.active;
            const textLine = document.lineAt(position.line)
            let text = textLine.text;
            editor.edit(editBuilder => {
                editBuilder.insert(position, replace(text));
            });
        }
    });
    context.subscriptions.push(disposable);
}
export function replace(text: string) :string {
    for (var key of WORD_ARR) {
        let keys = key.split(',');
        for (var i = 0; i < keys.length; i++) {
            var value = keys[i];
            if( text.indexOf(value) !== -1 ){
                return '\n'+ text.replace(value, keys[~~!i]);
            }
        }        
    }
    return '\n' + text;
}
export function deactivate() {
}