//@ts-nocheck

Ext.define("SE.view.Sessions", {
  extend: "Ext.grid.Panel",
  alias: "widget.sessiongridpanel",
//   listeners: {
//     itemclick: (grid, record, item, e) => {
//       console.log("Item clicked", record);
//       const formWindow = Ext.create("SE.view.SessionForm");
//       const form = formWindow.down("form");
//       form.loadRecord(record);
//       formWindow.show();
//     },
//   },

  store: 'Sessions',
  columns: [
    {
      xtype: "gridcolumn",
      dataIndex: "id",
      text: "UserId",
      padding: 5,
      marginLeft: 5,
    },
    {
      xtype: "gridcolumn",
      dataIndex: "title",
      text: "Title",
      flex: 1,
      minWidth: 100,
      width: 75,
    },
    {
      xtype: "gridcolumn",
      dataIndex: "body",
      text: "Body",
      flex: 2,
    },
  ],
  features: [
    {
      ftype: "grouping",
      groupHeaderTpl: ["{[values.rows[0].data.userId]}"],
    },
  ],
});
