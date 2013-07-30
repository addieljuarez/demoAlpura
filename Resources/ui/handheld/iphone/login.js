// 
//  login.js
//  demoAlpura
//  
//  Created by Addiel on 2013-07-30.
//  Copyright 2013 Addiel. All rights reserved.
// 

function Login(){
	/*
	 *  require
	 */
	var style = require('ui/handheld/iphone/style');
	var controllerLogin = require('ui/common/controllerLogin');
	
	
	
	var self = Titanium.UI.createWindow({
		backgroundColor:'blue',
	});
	
	var inputUser = Titanium.UI.createTextField(style.Login.input);
	var inputPass = Titanium.UI.createTextField(style.Login.input);
	inputUser.top = 100;
	inputPass.top = 150;
	inputPass.passwordMask = true;
	
	var buttonLogin = Titanium.UI.createButton(style.Login.button);
	var buttonRegistro = Titanium.UI.createButton(style.Login.button);
	var buttonLoginFacebok = Titanium.UI.createButton(style.Login.button);
	buttonLogin.top = 200;
	buttonRegistro.top = 250;
	buttonLoginFacebok.top = 300;
	buttonLogin.title = 'Login';
	buttonRegistro.title = 'Registro';
	buttonLoginFacebok.title = 'facebook';
	
	
	
	
	buttonLogin.addEventListener('click', function(e){
		var userCloud = inputUser.value;
		var passCloud = inputPass.value;
		if (inputUser.value != '' || inputPass.value != '') {
			controllerLogin.cloudLogin(userCloud, passCloud);
		}else{
			alert('rellena todos los campos');
		}
	});
	
	
	
	self.add(inputUser);
	self.add(inputPass);
	self.add(buttonLogin);
	self.add(buttonLoginFacebok);
	self.add(buttonRegistro);
	return self;
}
module.exports = Login;