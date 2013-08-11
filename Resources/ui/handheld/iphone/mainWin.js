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
	self.left =  0;
	self.zIndex = 10;
	var leftMenu = Titanium.UI.createWindow(style.General.win);
	leftMenu.zIndex = 1;
	var win1 = Titanium.UI.createWindow(style.General.win);
	win1.zIndex = 10;
	win1.left = 0;
	win1.navBarHidden = true
	var button = Ti.UI.createButton(style.General.button);
	button.left = 10;
	button.top = 20;
	button.title = 'menu';
	
	var buttonPerfil = Titanium.UI.createButton(style.General.button);
	buttonPerfil.top = 50;
	buttonPerfil.left = 10;
	buttonPerfil.title = 'perfil';
	var buttonRecomendaciones = Titanium.UI.createButton(style.General.button);
	buttonRecomendaciones.top = 100;
	buttonRecomendaciones.left = 10;
	buttonRecomendaciones.title = 'Recomendaciones';
	var buttonChat = Titanium.UI.createButton(style.General.button);
	buttonChat.top = 150;
	buttonChat.left = 10;
	buttonChat.title = 'chat';
	var buttonForo = Titanium.UI.createButton(style.General.button);
	buttonForo.top = 200;
	buttonForo.left =10;
	buttonForo.title = 'foro';
	var buttonExpertos = Titanium.UI.createButton(style.General.button);
	buttonExpertos.top = 250;
	buttonExpertos.left = 10;
	buttonExpertos.title = 'Foro';
	var logout = Titanium.UI.createButton(style.General.button);
	logout.top = 300;
	logout.left = 10;
	logout.title = 'logout';
	   
	
	
	/*
	 *  slide menu
	 */
	
	
	// var data = [{title:"Row 1"},{title:"Row 2"},{title:"Row 3"},{title:"Row 4"}];
	// var tableView	= Ti.UI.createTableView({ data: data });
	// leftMenu.add(tableView);
	leftMenu.open();
	
	
	
	
	// animations
	var animateLeft	= Ti.UI.createAnimation({
		left: 150,
		curve: Ti.UI.iOS.ANIMATION_CURVE_EASE_OUT,
		duration: 500
	});
	var animateRight	= Ti.UI.createAnimation({
		left: 0,
		curve: Ti.UI.iOS.ANIMATION_CURVE_EASE_OUT,
		duration: 500
	});
	
	
	
	
	
	var nav = Titanium.UI.iPhone.createNavigationGroup({
	   window: win1,
	   left: 0,
	   width: Ti.Platform.displayCaps.platformWidth,
	   
	});
	
	
	var touchStartX = 0;
	var touchStarted = false;
	
	
	// nav.add(button);
	self.add(nav);
	// self.open();
	
	
	var isToggled = false;
	button.addEventListener('click',function(e){
		if( !isToggled ){
			self.animate(animateLeft);
			isToggled = true;
		} else {
			self.animate(animateRight);
			isToggled = false;
		}
	});
	

	
	
	/*
	 * eventListener
	 */
	
	logout.addEventListener('click', function(e){
		controllerLogin.cloudLogout();
		if( !isToggled ){
			self.animate(animateLeft);
			isToggled = true;
		} else {
			self.animate(animateRight);
			isToggled = false;
		}
	});
	
	/*
	 * add to win
	 */
	
	leftMenu.add(logout);
	leftMenu.add(buttonChat);
	leftMenu.add(buttonExpertos);
	leftMenu.add(buttonForo);
	leftMenu.add(buttonPerfil);
	leftMenu.add(buttonRecomendaciones);
	nav.add(viewMain);
	viewMain.add(button)
	return self;
}
module.exports = MainWin;