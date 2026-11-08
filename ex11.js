
const fs = require("fs");
const path = require("path");

const directoryPath = path.join(__dirname, "data-folder");

function sumFileSize() {
    let sumFile = 0;
    let completed = 0;

    fs.readdir(directoryPath, (err, items) => {
        if (err) {
            console.log("FILE ERROR");
            return;
        }

        if (items.length === 0) {
            console.log("Total size: 0 bytes");
            return;
        }

        items.forEach((element) => {
            const filePath = path.join(directoryPath, element);

            fs.lstat(filePath, (err, stats) => {
                if (err) {
                    console.log(err.message);
                    return;
                }

                if (stats.isFile()) {
                    sumFile += stats.size;
                }

                completed++;

                if (completed === items.length) {
                    console.log(`Total size: ${sumFile} bytes`);
                }
            });
        });
    });
}

sumFileSize();
