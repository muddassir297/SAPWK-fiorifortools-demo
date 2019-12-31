sap.ui.define([
    'UI5FioriForTools/controller/BaseController'
], function (BaseController) {
    "use strict";

    var Controller = BaseController.extend("UI5FioriForTools.controller.MainNavigation.ObjectView.ObjectEmployee", {
        onInit: function () {
            var sURL = "/";
            var amodel = new sap.ui.model.odata.ODataModel(sURL, true);
            this.getView().setModel(amodel);

            var oRouter = this.getRouter();
            oRouter.getRoute("sap.uxap.ObjectPageLayout/sap.uxap.ObjectPageDynamicHeaderTitle/employee").attachMatched(this._onRouteMatched, this);
        },

        _onRouteMatched: function (oEvent) {
            var oArgs, oView;

            oArgs = oEvent.getParameter("arguments");
            oView = this.getView();

            oView.bindElement({
                path: "/Employees(" + oArgs.employeeId + ")",
                events: {
                    change: this._onBindingChange.bind(this),
                    dataRequested: function (oEvent) {
                        oView.setBusy(true);
                    },
                    dataReceived: function (oEvent) {
                        oView.setBusy(false);
                    }
                }
            });
        }
    });

    return Controller;
});