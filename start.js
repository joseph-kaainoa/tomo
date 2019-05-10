/*******************************
* File: start.js
* Author: joseph-kaainoa
* Last Modified: 2019-05-09
* Purpose: start node web server
*******************************/
(function() {
    "use strict";

    const express = require('express');
    const app = express();
    app.use(express.static(__dirname + '/src/'));
    var port = 9999;
    app.listen(port);
    console.log('Started server on http://localhost:' + port);
})();