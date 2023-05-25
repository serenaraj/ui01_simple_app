/*global QUnit*/

sap.ui.define([
	"comrizingui5/ui01_simple_app/controller/StartView.controller"
], function (Controller) {
	"use strict";

	QUnit.module("StartView Controller");

	QUnit.test("I should test the StartView controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
