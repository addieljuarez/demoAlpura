// 
//  mainWin.js
//  demoAlpura
//  
//  Created by Addiel on 2013-07-30.
//  Copyright 2013 Addiel. All rights reserved.
// 

function MainWin(){
	/*
	 * require
	 */
	var style = require('ui/handheld/iphone/style');
	var controllerLogin = require('ui/common/controllerLogin');
	var ViewMain = require('ui/handheld/iphone/views/viewMain');
	
	var viewMain = new ViewMain();
	/*
	 * UI
	 */
	var self = Titanium.UI.createWindow(style.General.win);
	
	var logout = Titanium.UI.createButton({
		title:'logout',
	});
	
	
	/*
	 * eventListener
	 */
	
	logout.addEventListener('click', function(e){
		controllerLogin.cloudLogout();
	});
	
	/*
	 * add to win
	 */
	
	// self.add(logout);
	self.add(viewMain);
	return self;
}
module.exports = MainWin;