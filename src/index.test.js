import {expect} from "chai"; // what is the difference betwee expect and {expect}
import jsdom from "jsdom";
import fs from "fs";

// const { JSDOM } = jsdom; // what does this do???

describe('Level 1 test',  function() {
    it('should pass', function() {
        expect(true).to.equal(true);
    });
});

describe('It should say Hello', function() {
    it('should say Users', function () {
        const win = new jsdom.JSDOM(
            fs.readFileSync('./src/index.html','utf-8') // read contents of the file as a string
        ).window;
        const h1 = win.document.getElementsByTagName('h1')[0];
        expect(h1.innerHTML).to.equal('Users');
        win.close();
    });
});
