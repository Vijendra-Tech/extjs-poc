
//@ts-nocheck
Ext.define("SE.view.SessionForm", {
  extend: "Ext.window.Window",
  alias: "widget.sessionform",
  padding: 5,
  width: 600,
  title: "Session Form",
  model: "true",
  items: [
    {
      xtype: "form",
      bodyPadding: 10,
      title: "",
      defaults: {
        labelWidth: 80,
        margin: "0 0 10 0",
        anchor: "90%",
      },
      items: [
        {
          xtype: "textfield",
          fieldLabel: "Title",
          name: "title",
          allowBlank: false,
        },
        {
          xtype: "textfield",
          fieldLabel: "Body",
          name: "body",
          allowBlank: false,
        },
      ],
    },
  ],
});
