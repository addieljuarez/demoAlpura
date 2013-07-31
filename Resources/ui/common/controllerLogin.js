// 
//  controllerLogin.js
//  demoAlpura
//  
//  Created by Addiel on 2013-07-30.
//  Copyright 2013 Addiel. All rights reserved.
// 

/*
 * modules
 */
var Cloud = require('ti.cloud');
Cloud.debug = true;
var facebook = require('facebook');

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
	facebook.logout();
	if (Titanium.Network.online == true) {
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
	} else{
		alert('sin coneccion');
	};
	
}


exports.cloudRegistro = function(cloudCorreo, cloudName, cloudSecondName, cloudPass, cloudConfirmarPass){
	
	var correoRegistro = cloudCorreo;
	var nombreRegistro = cloudName;
	var secondNameRegistro = cloudSecondName;
	var passRegistro = cloudPass;
	var confirmarPassRegistro = cloudConfirmarPass;
	if (Titanium.Network.online ==true) {
		Cloud.Users.create({
		    email: correoRegistro,
		    first_name: nombreRegistro,
		    last_name: secondNameRegistro,
		    password: passRegistro,
		    password_confirmation: confirmarPassRegistro
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

exports.facebook = function(){
	facebook.appid = '192844364216618';
	facebook.permissions = ['email, user_birthday, user_hometown, user_location, publish_actions, publish_stream, publish_checkins, user_photos'];
	facebook.authorize();  
	facebook.addEventListener('login', function(e) {
      
		    if (e.success) {
		    	Titanium.API.info('entra al succes del login de face')
		    	//alert('Logged In');
		    	facebook.requestWithGraphPath('me', {}, 'GET', function(e) {
				    if (e.success) {
				    	Titanium.API.info('entra asl succes del graph api')
				    
				        //alert(e.result);
				        var facebookRest = JSON.parse(e.result);
				        alert(facebookRest);
				        alert(facebookRest.email);
				        alert(facebookRest.first_name);
				        alert(facebookRest.last_name);
				        alert(facebookRest.id);
				        Cloud.Users.create({
						    email: facebookRest.email,
						    first_name: facebookRest.first_name,
						    last_name: facebookRest.last_name,
						    password: facebookRest.id,
						    password_confirmation: facebookRest.id
						}, function (e) {
						    if (e.success) {
						    	alert('registro exitoso en ACS de facebook');
						        var user = e.users[0];
						        alert('Success:\n' +
						            'id: ' + user.id + '\n' +
						            'sessionId: ' + Cloud.sessionId + '\n' +
						            'first name: ' + user.first_name + '\n' +
						            'last name: ' + user.last_name);
						       	Titanium.App.Properties.setBool('autentificacion', true);
								Titanium.App.fireEvent('autentificacion');
						    } else {
						        alert('Error:\n' + ((e.error && e.message) || JSON.stringify(e)));
						        
						        Cloud.Users.login({
								    login: facebookRest.email,
								    password: facebookRest.id,
								}, function (e) {
								    if (e.success) {
								        var user = e.users[0];
								        alert('Success:\n' +
								            'id: ' + user.id + '\n' +
								            'sessionId: ' + Cloud.sessionId + '\n' +
								            'first name: ' + user.first_name + '\n' +
								            'last name: ' + user.last_name);
								        alert(facebookRest.email);
								        alert(facebookRest.id);
								        alert('login de face. cuando da error el registro');
								        Titanium.App.Properties.setBool('autentificacion', true);
										Titanium.App.fireEvent('autentificacion');
								    } else {
								        alert('Error:\n' +
								            ((e.error && e.message) || JSON.stringify(e)));s
								        alert('error del login de ACS despues de error de facebook por tener repetido el correo');
								    }
								});
						       
						         
						    }
						});
				        
				     
					} else if (e.error) {
					     //alert(e.error);
					     errorMessage.message = 'Intenta de nuevo';
					     errorMessage.show();
					     Titanium.Facebook.logout();
					     indicador.hide()
					} else {
					     //alert('Unknown response');
					     errorMessage.message = 'Intenta de nuevo';
					     errorMessage.show();
					     Titanium.Facebook.logout();
					     indicador.hide();
					}
				});
		    	
		    } else if (e.error) {
		        errorMessage.message = 'Error de conección, intenta de nuevo';
				errorMessage.show();
				Titanium.Facebook.logout();
				indicador.hide();
		    } else if (e.cancelled) {
		        //alert("Canceled");
		        indicador.hide();
		        Titanium.Facebook.logout();
		    }
		});
}
