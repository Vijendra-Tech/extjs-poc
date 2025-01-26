Ext.define("SE.model.Session", {
  extend: "Ext.data.Model",
  fields: ["id", "title", "body"],
  proxy: {
    type: "rest",
    url: "https://jsonplaceholder.typicode.com/posts",
    reader: {
      type: "json",
      root: "data",
    },
  },
});