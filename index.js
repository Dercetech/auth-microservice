/* ***************************************************** *\
|*	   ___  _______  __________________________ __		  *|
|*		  / _ \/ __/ _ \/ ___/ __/_  __/ __/ ___/ // /	  *|
|*		 / // / _// , _/ /__/ _/  / / / _// /__/ _  / 	  *|
|*		/____/___/_/|_|\___/___/ /_/ /___/\___/_//_/  	  *|
|*												  		  *|
|*		 Best-practice auth µService, Dercetech 2017	  *|
|*            coded by Jérémie "Jem" Mercier              *|
|*														  *|
\* ************ http://www.dercetech.com **************** */

/*
	This microservice is meant to authenticate users by returning a token (JOT).
	It implements the guidelines found in the following article regarding best practices:
	https://nakedsecurity.sophos.com/2013/11/20/serious-security-how-to-store-your-users-passwords-safely/
*/

'use strict';

// Trapezo boilerplate line: Run server start routine when reflected dependencies are resolved
require('trapezo').resolve(module, function(main){

    // Start server
    main.start().then( (httpServer) => {
		
		// Get version from package.json
		let version = process.env && process.env.npm_package_version;
	    
		// Display running version
		if(version) console.log("Dercetech Authentication µService ready (v" + version + ")");
		else console.log("Dercetech Authentication µService ready - please run using 'npm start'.");
		
		// Display running environment
		if(process.env.NODE_ENV) console.log(`Environment: ${process.env.NODE_ENV}`)
		
		// Output API status
	    console.log('API: ' + httpServer.address().address + ':' + httpServer.address().port);
    });
});