//
// Note: This example test is leveraging the Mocha test framework.
// Please refer to their documentation on https://mochajs.org/ for help.
//
import * as assert from 'assert';
import * as vscode from 'vscode';
import * as myExtension from '../src/extension';

suite("Extension Tests", () => {
    const config = vscode.workspace.getConfiguration('duplicateLineSwitchWord');
    const WORD_ARR: string[] = config["pattern"];
    test("should return true when config pattern is Array", () => {
        assert.equal(true, Array.isArray(WORD_ARR));
    });
    test("myExtension replace", () => {
        assert.equal(myExtension.replace("width:50px"), "\nheight:50px");
        assert.equal(myExtension.replace("height:50px"), "\nwidth:50px");
        assert.equal(myExtension.replace("myClass.addEventListener"), "\nmyClass.removeEventListener");
        assert.equal(myExtension.replace("myClass.removeEventListener"), "\nmyClass.addEventListener");
        assert.equal(myExtension.replace("{top:10rem}"), "\n{bottom:10rem}");
        assert.equal(myExtension.replace("{bottom:10rem}"), "\n{top:10rem}");
    });
});