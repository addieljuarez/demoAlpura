/**
 * @author Addiel
 */

function RegistroWin(){
	/*
	 * require
	 */
	var style = require('ui/handheld/iphone/style');
	var controllerLogin = require('ui/common/controllerLogin');
	
	
	/*
	 * UI
	 */
	var self =  Titanium.UI.createWindow(style.General.win);
	
	var inputCorreo = Titanium.UI.createTextField(style.Login.input);
	var inputName = Titanium.UI.createTextField(style.Login.input);
	var inputSecondName = Titanium.UI.createTextField(style.Login.input);
	var inputPassword = Titanium.UI.createTextField(style.Login.input);
	var inputConfirmarPassword = Titanium.UI.createTextField(style.Login.input);
	inputCorreo.top = 50;
	inputName.top = 100;
	inputSecondName.top = 150;
	inputPassword.top = 200;
	inputConfirmarPassword.top = 250;
	inputCorreo.hintText = 'correo';
	inputName.hintText = 'nombre';
	inputSecondName.hintText = 'apellido';
	inputPassword.hintText = 'password';
	inputConfirmarPassword.hintText = 'confirmar pass';
	inputPassword.passwordMask = true;
	inputConfirmarPassword.passwordMask = true;
	
	var buttonRegistro = Titanium.UI.createButton(style.General.button);
	var buttonCerrarRegistro = Titanium.UI.createButton(style.General.button);
	buttonRegistro.title = 'registrate',
	buttonRegistro.top = 300;
	buttonCerrarRegistro.top = 350;
	buttonCerrarRegistro.title = 'cerrar';
	
	
	
	/*
	 * EventListener
	 */
	
	buttonRegistro.addEventListener('click', function(e){
		if (inputCorreo.value != '' && inputName.value != '' && inputSecondName.value !=''  && inputPassword.value != '' && inputConfirmarPassword.value != '') {
			if (inputPassword.value == inputConfirmarPassword.value) {
				var cloudCorreo = inputCorreo.value;
				var cloudName = inputName.value;
				var cloudSecondName = inputSecondName.value;
				var cloudPass =  inputPassword.value;
				var cloudConfirmarPass = inputConfirmarPassword.value;
				
				controllerLogin.cloudRegistro(cloudCorreo, cloudName, cloudSecondName, cloudPass, cloudConfirmarPass);
				
			}else{
				alert('pass diferentes');
			}
		}else{
			alert('rellena todos los campos');
		}
	});
	
	buttonCerrarRegistro.addEventListener('click', function(e){
		self.close();
	});
	
	
	/*
	 *  add to Win
	 */
	self.add(inputCorreo);
	self.add(inputName);
	self.add(inputSecondName);
	self.add(inputPassword);
	self.add(inputConfirmarPassword);
	self.add(buttonRegistro);
	self.add(buttonCerrarRegistro);
	
	
	return self
}
module.exports = RegistroWin;