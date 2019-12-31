sap.ui.define([
    "sap/ui/core/mvc/Controller"
], function (Controller) {
    "use strict";

    var Controller = Controller.extend("UI5FioriForTools.controller.MainNavigation.ListView.Employees", {
        onInit: function () {
            var sURL = "/";
            var amodel = new sap.ui.model.odata.ODataModel(sURL, true);
            var oModel = new sap.ui.model.json.JSONModel();
            amodel.read("/Employees", {
                success: function (oRetrievedResult) {
                    oModel.setData(oRetrievedResult);
                },
                error: function (oError) { alert(`Error ${oError}`); }
            });
            this.getView().setModel(oModel);
        },
        onPress: function (oEvent) {
            var oItem, oCtx, oAttr;
            oItem = oEvent.getSource();
            oCtx = oItem.getBindingContext();
            oAttr = oCtx.getProperty("EmployeeNo");
            
            this.getRouter().navTo("sap.uxap.ObjectPageLayout/sap.uxap.ObjectPageDynamicHeaderTitle/employee", {
                employeeId: oAttr
            });
        },
        getRouter: function () {
            return sap.ui.core.UIComponent.getRouterFor(this);
        }
    });

    return Controller;
}
);
