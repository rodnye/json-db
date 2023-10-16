# Json-DB

Json-DB is a JavaScript module that allows you to handle a simple and lightweight database using JSON files. This tool is useful for small projects that require data persistence without the need for a complete database.

## Installation
You can install `json-db` through npm using the following command:

```
npm install json-db@github:rodnye/json-db
```

## Usage
Once installed, you can use the `json-db` module in your project as follows:

```javascript
const JsonDB = require('json-db');

// Instantiate the JsonDB class
const db = new JsonDB('file.json');

// Read data from the file
db.read();

// Access the data
console.log(db.data);

// Modify the data
db.data.foo = 'bar';

// Save the changes to the file
db.write();
```

Replace `'file.json'` with the relative or absolute path to your JSON file.
