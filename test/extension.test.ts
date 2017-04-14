//
// Note: This example test is leveraging the Mocha test framework.
// Please refer to their documentation on https://mochajs.org/ for help.
//

// The module 'assert' provides assertion methods from node
import * as assert from 'assert';

// You can import and use all API from the 'vscode' module
// as well as import your extension to test it
import * as vscode from 'vscode';
import * as myExtension from '../src/extension';

// Defines a Mocha test suite to group tests of similar kind together
suite("Extension Tests", () => {
    const config = vscode.workspace.getConfiguration('duplicateLineSwitchWord');
    const WORD_ARR: string[] = config["pattern"];
    // Defines a Mocha unit test
    test("should config pattern is Array", () => {
        assert.equal(true, Array.isArray(WORD_ARR));
    });

    test("myExtension replace", () => {
        assert.equal(myExtension.replace("width:50px"), "\nheight:50px");
        assert.equal(myExtension.replace("height:50px"), "\nwidth:50px");
        assert.equal(myExtension.replace("myClass.addEventListener"), "\nmyClass.removeEventListener");
    });
});