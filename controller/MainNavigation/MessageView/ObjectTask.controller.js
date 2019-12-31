sap.ui.define([
    'sap/ui/core/mvc/Controller',
    'sap/ui/model/json/JSONModel'
], function (Controller, JSONModel) {
    "use strict";

    var Controller = Controller.extend("UI5FioriForTools.controller.MainNavigation.ObjectView.ObjectScTask", {
        onInit: function () {
            this.getView().setModel(new JSONModel({
                "message": "UI5 components used in current page: <strong>sap.uxap.ObjectPageLayout</strong>, <strong>sap.uxap.ObjectPageDynamicHeaderTitle</strong> and <strong>sap.uxap.ObjectPageSection</strong>. "
            }));
        }
    });

    return Controller;
});