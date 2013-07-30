// 
//  ApplicationWindow.js
//  demoAlpura
//  
//  Created by Addiel on 2013-07-30.
//  Copyright 2013 Addiel. All rights reserved.
// 

function ApplicationWindow() {
	
	var self = Ti.UI.createWindow({
		backgroundColor:'#000'
	});
	
	
	self.addEventListener('open', function(e){
		 
		var Login = require('ui/handheld/iphone/login'); 
	    var MainWin = require('ui/handheld/iphone/mainWin');
	    var mainWin = new MainWin();
	    var login = new Login();	
		
		if(!Titanium.App.Properties.hasProperty('autentificacion')) 
		{
			Titanium.App.Properties.setBool('autentificacion', false);
		}
			
			
		if(Titanium.App.Properties.getBool('autentificacion')) 
		{
			mainWin.open();
		}else{
			login.open();
		};
			
			
			
			
		Ti.App.addEventListener('desautentificacion', function(e) {
	    		login.open();
			mainWin.close(Titanium.API.info('se cierra mainWin'));
			Titanium.API.info('entra la desautentificacion');
			Titanium.App.Properties.setString('idsesion', '')
		});
			
		Ti.App.addEventListener('autentificacion', function(e) {
			mainWin.open();
			login.close();
		});
	});
	return self;
}


module.exports = ApplicationWindow;
