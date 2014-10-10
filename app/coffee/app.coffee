define [
  'backbone'
  'marionette'
], (Backbone, Marionette) ->

  app = new Marionette.Application()

  app.addRegions
    mainRegion: '#main'

  app.addInitializer ->
    console.log "Application initialization..."

  app.on 'start', ->
    Backbone.history.start()
    console.log "Started..."

  app.start()

  window.app = app