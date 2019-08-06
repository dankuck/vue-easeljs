/**
 * Run this file to create easel.js by combining the easeljs repo files with
 * the header that makes it a proper ES6 module.
 *
 * This file is run automatically during `npm install`.
 */

const fs = require('fs');

/**
 * Only run in dev mode. In dev mode we install easeljs. Nobody else needs it.
 */
if (fs.existsSync(`${__dirname}/../node_modules/easeljs`)) {
    const header = fs.readFileSync(`${__dirname}/easel-header.js`);
    const body = fs.readFileSync(`${__dirname}/../node_modules/easeljs/lib/easeljs.js`);
    const whole = header + body;
    fs.writeFileSync(`${__dirname}/easel.js`, whole);
}

