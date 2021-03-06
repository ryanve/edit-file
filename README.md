# [`edit-file`](https://www.npmjs.com/package/edit-file)
Edit (read, edit, write) a file in Node.js

```
npm install edit-file
```

## API

### <code>editFile(file, edit=text=>text, callback=<var>done</var>)</code>

- `file` is the filename path you want to edit. It may be relative or absolute.
- `edit` is the editing function you use to change the text. The default returns the original text.
- `callback` is a function to call after editing. The default throws errors and logs success.

## Usage

```js
const editFile = require("edit-file")
```

```js
editFile("example.txt")
```

```js
editFile("example.txt", text => text.trim())
```

```js
editFile("example.txt", text => text.trim(), err => {
  if (err) throw err
  // ...
})
```
