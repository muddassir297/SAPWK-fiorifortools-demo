sap.ui.define([
    'sap/ui/core/mvc/Controller',
    'sap/ui/model/json/JSONModel'
], function (Controller, JSONModel) {
    "use strict";

    var Controller = Controller.extend("UI5FioriForTools.controller.MainNavigation.MessageView.ObjectScenario.Example1-StandardList", {
        onInit: function () {
            this.getView().setModel(new JSONModel({
                "message": "Master to detail navigation using <em>standard list items</em> in a list. UI5 components used in current page: <strong>sap.uxap.ObjectPageLayout</strong>, <strong>sap.uxap.ObjectPageDynamicHeaderTitle</strong>, <strong>sap.m.List</strong>, <strong>sap.m.StandardListItem</strong>. "
            }));
        }
    });

    return Controller;
});