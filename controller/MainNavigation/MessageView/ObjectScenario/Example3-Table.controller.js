sap.ui.define([
    'sap/ui/core/mvc/Controller',
    'sap/ui/model/json/JSONModel'
], function (Controller, JSONModel) {
    "use strict";

    var Controller = Controller.extend("UI5FioriForTools.controller.MainNavigation.MessageView.ObjectScenario.Example3-Table", {
        onInit: function () {
            this.getView().setModel(new JSONModel({
                "message": "Master to detail navigation using <em>column list items</em> in a table. UI5 components used in current page: <strong>sap.uxap.ObjectPageLayout</strong>, <strong>sap.uxap.ObjectPageDynamicHeaderTitle</strong>, <strong>sap.m.Table</strong>, <strong>sap.m.ColumnListItem</strong>. "
            }));
        }
    });

    return Controller;
});