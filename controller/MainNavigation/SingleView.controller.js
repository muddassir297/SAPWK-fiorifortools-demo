sap.ui.define([
    'sap/ui/core/mvc/Controller',
    'sap/ui/model/json/JSONModel'
], function (Controller, JSONModel) {
    "use strict";

    var Controller = Controller.extend("UI5FioriForTools.controller.MainNavigation.SingleView", {
        onInit: function (evt) {
            var oModel = new JSONModel(sap.ui.require.toUrl("UI5FioriForTools/localService/mockdata") + "/FilterBar.json");
            this.getView().setModel(oModel);
        }
    });

    return Controller;
});