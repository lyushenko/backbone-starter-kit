var libs;

libs = '../../bower_components/';

requirejs.config({
  baseUrl: '/app/scripts',
  paths: {
    jquery: libs + 'jquery/dist/jquery',
    underscore: libs + 'underscore/underscore',
    backbone: libs + 'backbone/backbone',
    marionette: libs + 'backbone.marionette/lib/backbone.marionette',
    hbs: libs + 'require-handlebars-plugin/hbs'
  },
  shim: {
    underscore: {
      exports: '_'
    },
    backbone: {
      deps: ['jquery', 'underscore'],
      exports: 'Backbone'
    },
    marionette: {
      deps: ['backbone'],
      exports: 'Backbone.Marionette'
    }
  }
});

require(['app']);
