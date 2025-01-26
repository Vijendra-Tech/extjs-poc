Ext.define("SE.controller.SessionController", {
  extend: "Ext.app.Controller",
  //   stores: ["Sessions"],
  //   models: ["Session"],
  //   views: ["Sessions", "SessionForm"],
  //   refs: [
  //     {
  //       ref: "sessions",
  //       selector: "sessions",
  //     },
  //   ],
  init: function () {
    this.control({
      sessiongridpanel: {
        itemdblclick: function (grid, record, item, e) {
          console.log("Item double clicked");
          const formWindow = Ext.create("SE.view.SessionForm");
          const form = formWindow.down("form");
          form.loadRecord(record);
          formWindow.show();
        },
      },
    });
  },
  addSession: function () {
    var view = Ext.widget("sessionform");
    view.down("form").loadRecord(Ext.create("SessionApp.model.Session"));
  },
  editSession: function (grid, record) {
    var view = Ext.widget("sessionform");
    view.down("form").loadRecord(record);
  },
  updateSession: function (button) {
    var win = button.up("window"),
      form = win.down("form"),
      record = form.getRecord(),
      values = form.getValues();
    record.set(values);
    win.close();
    this.getSessionsStore().sync();
  },
  deleteSession: function () {
    var grid = this.getSessions(),
      record = grid.getSelectionModel().getSelection();
    this.getSessionsStore().remove(record);
    this.getSessionsStore().sync();
  },
});
