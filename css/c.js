var arr = ['0.1', '0.05', '0.07'];

var fs = require('fs');

fs.writeFileSync("flipclock.css", fs.readFileSync("_flipclock.css").toString().split("0.5s").join("@1@").split("0.2s").join("@2@").split("0.3s").join("@3@").split("@1@").join(arr[0]+"s").split("@2@").join(arr[1]+"s").split("@3@").join(arr[2]+"s"));