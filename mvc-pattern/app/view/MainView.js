
//@ts-ignore
Ext.define('SE.view.MainView', {
    extend: 'Ext.container.Viewport',
    layout: 'border',
      items: [
              {
                region: "west",
                layout: {
                  type: "vbox",
                  align: "stretch",
                },
                split: true,
                flex: 1,
                items: [
                  {
                    xtype: "sessiongridpanel",
                    flex: 3,
                  },
                  {
                    xtype: "splitter",
                    width: 1,
                  },
                  {
                    html: "<b>Speaker Panel</b>",
                    flex: 1,
                    xtype: "panel",
                  },
                ],
              },
              {
                region: "center",
                html: "<b>Detail Panel</b>",
                flex: 3,
                xtype: "panel",
                collapsible: false,
                collapsed: false,
                collapseDirection: "right",
                title: "Details Panel",
              },
            ],
    });
