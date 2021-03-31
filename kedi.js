#!/usr/bin/env node
const terminalImage = require('terminal-image');
const got = require('got');

async function kedi() {
    const body = await got('https://cataas.com/cat?filter=mono').buffer();
    console.log(await terminalImage.buffer(body));
}

kedi();
