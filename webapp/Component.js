sap.ui.define(
  ["sap/ui/core/UIComponent", "sap/ui/model/json/JSONModel"],
  function (UIComponent, JSONModel) {
    "use strict";
    return UIComponent.extend("myApp.Component", {
      metadata: {
        manifest: "json",
      },
      init: function () {
        UIComponent.prototype.init.apply(this, arguments);
        // Definim modelul JSON pentru stoc
        debugger;
        var oModel = new JSONModel({
          produse: [
            { id: 1, nume: "Pâine", cantitate: 100 },
            { id: 2, nume: "Lapte", cantitate: 50 },
            { id: 3, nume: "Zahăr", cantitate: 75 },
          ],
        });
        this.setModel(oModel);
        this.getRouter().initialize();
      },
    });
  }
);