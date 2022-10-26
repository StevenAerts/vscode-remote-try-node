/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

'use strict';
const os = require("os");
const fs = require("fs");

const express = require('express');

// Constants
const PORT = 3000;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
	console.log("Reading file /home/steven/test.txt on bound volume");
	fs.readFile('/home/steven/test.txt', 'utf8', function(err, data){
		const hostname = os.hostname();
		var response = 'Hello remote world from ' + hostname +'!<br>';
		
		if(err)
			response+= 'Error reading test file: ' + err;
		else
			response+= 'Test file contents: ' + data;

		res.send(response);
	});
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);