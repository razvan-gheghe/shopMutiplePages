sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "sap/m/Dialog",
    "sap/m/Button",
    "sap/m/Image",
    "sap/ui/core/HTML",
    "sap/m/Text",
    "sap/m/VBox",
  ],
  function (Controller, Dialog, Button, Image, HTML, Text, VBox) {
    "use strict";
    return Controller.extend("myApp.controller.View3", {
      onNavigateToView1: function () {
        var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
        oRouter.navTo("View1");
      },
      onNavigateToView2: function () {
        var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
        oRouter.navTo("View2");
      },
      onTileTraitPress: function () {
        var oDialog = new Dialog({
          title: "Locuri în care am trăit",
          content: [
            new VBox({
              items: [
                new Text({
                  text: "Munich",
                }),
                new Image({
                  src: "./images/path_to_image_loc_trait_3.jpg",
                  width: "100%",
                }),
              ],
            }),
            new VBox({
              items: [
                new Text({
                  text: "Cluj-Napoca",
                }),
                new Image({
                  src: "./images/path_to_image_loc_trait_1.jpg",
                  width: "100%",
                }),
              ],
            }),
            new VBox({
              items: [
                new Text({
                  text: "Suceava",
                }),
                new Image({
                  src: "./images/path_to_image_loc_trait_2.jpg",
                  width: "100%",
                }),
              ],
            }),
          ],
          endButton: new Button({
            text: "Închide",
            press: function () {
              oDialog.close();
            },
          }),
        });

        // Deschide dialogul
        oDialog.open();
      },

      onTileVizitatPress: function () {
        var oDialog = new Dialog({
          title: "Locuri pe care le-am vizitat",
          content: [
            new VBox({
              items: [
                new Text({
                  text: "Paris",
                }),
                new Image({
                  src: "./images/path_to_image_loc_vizitat_1.jpg",
                  width: "100%",
                }),
              ],
            }),
            new VBox({
              items: [
                new Text({
                  text: "Londra",
                }),
                new Image({
                  src: "./images/path_to_image_loc_vizitat_2.jpg",
                  width: "100%",
                }),
              ],
            }),
          ],
          endButton: new Button({
            text: "Închide",
            press: function () {
              oDialog.close();
            },
          }),
        });

        // Deschide dialogul
        oDialog.open();
      },

      onWorkPress: function () {
        var oDialog = new Dialog({
          title: "My work",
          content: [
            new VBox({
              items: [
                new Image({
                  src: "./images/work1.jpg",
                  width: "100%",
                }),
              ],
            }),
            new VBox({
              items: [
                new Image({
                  src: "./images/work2.jpg",
                  width: "100%",
                }),
              ],
            }),
          ],
          endButton: new Button({
            text: "Închide",
            press: function () {
              oDialog.close();
            },
          }),
        });

        // Deschide dialogul
        oDialog.open();
      },
    });
  }
);
