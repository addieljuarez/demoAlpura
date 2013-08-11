function ViewMain(){
	/*
	 * require
	 */
	var style = require('ui/handheld/iphone/style');
	
	/*
	 * UI
	 */
	var self = Titanium.UI.createView(style.General.view);
	var inputEdad = Titanium.UI.createTextField(style.General.input);
	var inputEstatura = Titanium.UI.createTextField(style.General.input);
	var inputPeso = Titanium.UI.createTextField(style.General.input);
	inputEdad.top = 100;
	inputEstatura.top = 150;
	inputPeso.top = 200;
	inputEdad.hintText = 'edad';
	inputEstatura.hintText = 'Estatura';
	inputPeso.hintText = 'peso';
	
	
	/*
	 * eventListener
	 */
	
	
	self.add(inputEdad);
	self.add(inputEstatura);
	self.add(inputPeso);
	return self;
}
module.exports = ViewMain;