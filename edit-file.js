const fs = require("fs")
const path = require("path")
const utf8 = "utf8"
const same = text => text
const done = file => err => {
  if (err) throw err
  console.log("Edited:", file)
}

const editFile = (file, edit, cb) => {
  if (void 0 === edit) edit = same
  if (void 0 === cb) cb = done(file)
  const abs = path.resolve(file)
  fs.readFile(abs, utf8, (err, text) => {
    if (err) throw err
    text = edit(text)
    if (void 0 === text) cb(new Error("text => undefined"))
    else fs.writeFile(abs, text, utf8, cb)
  })
}

module.exports = editFile;
