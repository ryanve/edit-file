const editFile = require("./")
const assert = require("assert")
const fs = require("fs")
const noop = () => {}
const file = "test.txt"
const utf8 = "utf8"
const hello = "hello"
const world = "world"

fs.writeFile(file, hello, utf8, err => {
  if (err) throw err
  editFile(file, noop, err => assert.ok(err instanceof Error))
  editFile(file, text => {
    assert.strictEqual(text, hello)
    return world
  }, err => {
    if (err) throw err
    assert.strictEqual(fs.readFileSync(file, utf8), world)
    fs.unlink(file, function(err) {
      if (err) throw err
      console.log("Tested:", file)
    })
  })
})
