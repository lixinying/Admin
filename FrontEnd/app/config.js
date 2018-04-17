(function(){
	var appConfig = {
    title: "Corporate Directory",
    lang: "en",
    dateFormat: "mm/dd/yy",
    host: 'http://localhost/HachiCMS3Backend/',
    theme: 'skin-purple',
    EXTREM_PATH: 'http://localhost/chopeshift_cms/Backend/',
    layout: "",
    version:'2018-01'
};

app.constant('appSettings', appConfig);

  app.config(
    [        '$controllerProvider', '$compileProvider', '$filterProvider', '$provide',
    function ($controllerProvider,   $compileProvider,   $filterProvider,   $provide) {
        
        // lazy controller, directive and service
        app.controller = $controllerProvider.register;
        app.directive  = $compileProvider.directive;
        app.filter     = $filterProvider.register;
        app.factory    = $provide.factory;
        app.service    = $provide.service;
        app.constant   = $provide.constant;
        app.value      = $provide.value;
    }
  ])
})()