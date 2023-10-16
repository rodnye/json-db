const fs = require("fs");

/**
 * Represents a JSON file handler.
 * @class
 * @param {string} filePath - The path of the JSON file to handle.
 */
class JsonDB {
    
    constructor (filePath) {
        this.filePath = filePath; 
        this.read();
    }

    /**
     * Read the JSON data.
     */
    read () {
        try {
            const file = fs.readFileSync(this.filePath);
            this.data = JSON.parse(file);
        }
        catch (error) {
            this.error = error; // set error info
            this.data = {}; // set empty data if error
        }

        return this;
    }
    
    /**
     * Saves the JSON data to the file. 
     */
    write () {
        const json = JSON.stringify(this.data, null, 2);
        fs.writeFileSync(this.filePath, json);
    }
    
}

module.exports = JsonDB;