sap.ui.define(
  ["sap/ui/core/mvc/Controller", "sap/ui/model/json/JSONModel"],
  function (Controller, JSONModel) {
    "use strict";
    return Controller.extend("myApp.controller.View2", {
      onInit: function () {
        // Model cu produse pentru a fi afișate în listă
        var oData = {
          produse: [
            {
              id: 1,
              nume: "Pâine de casă",
              cantitate: 100,
              furnizor: "Brutăria Solca",
              adresa: "Strada Principală, nr. 15",
            },
            {
              id: 2,
              nume: "Lapte proaspăt",
              cantitate: 50,
              furnizor: "Ferma Bucovina",
              adresa: "Strada Pădurii, nr. 22",
            },
            {
              id: 3,
              nume: "Brânză de burduf",
              cantitate: 20,
              furnizor: "Stâna Miorița",
              adresa: "Drumul Stânii, nr. 9",
            },
            {
              id: 4,
              nume: "Miere naturală",
              cantitate: 30,
              furnizor: "Apicultura Solca",
              adresa: "Strada Albinelor, nr. 3",
            },
          ],
        };

        var oModel = new JSONModel(oData);
        this.getView().setModel(oModel);
        // Creare dialog
        if (!this._oDialog) {
          this._oDialog = new sap.m.Dialog({
            title: "Detalii Produs",
            content: [
              new sap.m.Text({ text: "Furnizor: {furnizor}" }),
              new sap.m.Text({ text: "Adresă: {adresa}" }),
            ],
            beginButton: new sap.m.Button({
              text: "OK",
              press: function () {
                this._oDialog.close();
              }.bind(this),
            }),
          });

          this.getView().addDependent(this._oDialog);
        }
      },
      onDetailsPress: function (oEvent) {
        // Preluăm contextul itemului apăsat
        var oItem = oEvent.getSource().getBindingContext().getObject();

        // Legăm dialogul la datele produsului selectat
        this._oDialog.bindElement({
          path: oEvent.getSource().getBindingContext().getPath(),
        });

        // Afișăm dialogul
        this._oDialog.open();
      },
      // onContactPress: function () {
      //   // Afișare mesaj pentru contact
      //   sap.m.MessageToast.show(
      //     "Pentru informații suplimentare, ne puteți contacta la: +40 123 456 789."
      //   );
      // },
      onContactPress: function () {
        // Numărul tău de telefon
        var phoneNumber = "+40745514223"; // Schimbă cu numărul tău

        // Lansează apelul către numărul specificat
        sap.m.URLHelper.triggerTel(phoneNumber);

        // Afișează mesajul că apelul este lansat
        sap.m.MessageToast.show("Apelarea numărului " + phoneNumber + "...");
      },
      onNavigateToView1: function () {
        var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
        oRouter.navTo("View1");
      },
    });
  }
);
