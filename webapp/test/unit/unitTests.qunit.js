/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"comrizingui5/ui01_simple_app/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
