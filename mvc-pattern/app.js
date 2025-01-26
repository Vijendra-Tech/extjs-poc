
//@ts-ignore
Ext.Loader.setConfig({
    enabled: true,
});

//@ts-nocheck
Ext.application({
    name:"SE",
    requires:[
        'SE.view.MainView',
    ],
    views:[
        'Sessions',
        'SessionForm',
    ],
    stores:[
        'Sessions',
    ],
    controllers:[
        'SE.controller.SessionController',
    ],
   
    launch: function()  {
        Ext.create('SE.view.MainView');
    }
});
