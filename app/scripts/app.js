define(['backbone', 'marionette'], function(Backbone, Marionette) {
  var app;
  app = new Marionette.Application();
  app.addRegions({
    mainRegion: '#main'
  });
  app.addInitializer(function() {
    return console.log("Application initialization...");
  });
  app.on('start', function() {
    Backbone.history.start();
    return console.log("Started...");
  });
  app.start();
  return window.app = app;
});
