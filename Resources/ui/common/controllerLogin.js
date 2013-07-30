// 
//  controllerLogin.js
//  demoAlpura
//  
//  Created by Addiel on 2013-07-30.
//  Copyright 2013 Addiel. All rights reserved.
// 


var Cloud = require('ti.cloud');
Cloud.debug = true;

exports.cloudLogin = function(userCloud, passCloud){
	var UserCloud = userCloud;
	var PassCloud = passCloud;
	alert(UserCloud);
	alert(PassCloud);
	
	if (Titanium.Network.online == true) {
		Cloud.Users.login({
		    login: UserCloud,
		    password: PassCloud,
		}, function (e) {
		    if (e.success) {
		        var user = e.users[0];
		        alert('Success:\n' +
		            'id: ' + user.id + '\n' +
		            'sessionId: ' + Cloud.sessionId + '\n' +
		            'first name: ' + user.first_name + '\n' +
		            'last name: ' + user.last_name);
		            
		            Titanium.App.Properties.setBool('autentificacion', true);
					Titanium.App.fireEvent('autentificacion');
		    } else {
		        alert('Error:\n' +
		            ((e.error && e.message) || JSON.stringify(e)));
		    }
		});


	} else{
		alert('sin coneccion');
	};
}


exports.cloudLogout = function(){
	Cloud.Users.logout(function (e) {
	    if (e.success) {
	        alert('Success: Logged out');
	        Titanium.App.Properties.setBool('autentificacion', false);
			Ti.App.fireEvent('desautentificacion');
	    } else {
	        alert('Error:\n' +
	            ((e.error && e.message) || JSON.stringify(e)));
	    }
	});	
}
