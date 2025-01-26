
//@ts-ignore
Ext.define("SE.store.Sessions", {
  extend: "Ext.data.Store",
  alias: "store.sessions",

  model:'SE.model.Session',

  sorters: [
    {
      property: "title",
    },
  ],
  autoLoad: true,
  autoSync: true,
});