const fs = require('fs');
const { createData } = require('./dataToJson');

const data = createData(0.7008);
const names = ['amps', 'ampsd'];

data.forEach((data, index) => {
    const formatedData = data.map((rawData) => ({
        x: rawData[0],
        y: rawData[1],
    }));
    fs.writeFile(`./src/${names[index]}.json`, JSON.stringify(formatedData), () => {
        console.log();
    });
});
