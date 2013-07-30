// 
//  mainWin.js
//  demoAlpura
//  
//  Created by Addiel on 2013-07-30.
//  Copyright 2013 Addiel. All rights reserved.
// 

function MainWin(){
	var controllerLogin = require('ui/common/controllerLogin');
	var self = Titanium.UI.createWindow({
		backgroundColor:'red',
	});
	
	var logout = Titanium.UI.createButton({
		title:'logout',
	});
	
	logout.addEventListener('click', function(e){
		controllerLogin.cloudLogout();
	});
	
	self.add(logout);
	return self;
}
module.exports = MainWin;