const url = require('url');

let u = 'https://www.tiktok.com/@ai_uehara_ex61';

let p = url.parse(u, true).path;

let id = p.slice(2, p.length - 1);

console.log(id);
