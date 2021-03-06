goog.require('ol.Collection');
goog.require('ol.Coordinate');
goog.require('ol.Map');
goog.require('ol.Projection');
goog.require('ol.RendererHint');
goog.require('ol.layer.TileLayer');
goog.require('ol.source.BingMaps');
goog.require('ol.source.TileJSON');


var layers = new ol.Collection([
  new ol.layer.TileLayer({
    source: new ol.source.BingMaps({
      key: 'Ak0kFwyFsvMr0dVwuaURTqKAXytSSN47KOdj4uVpaWBhK-DT6Zo-FeHCiJUL0tYL',
      style: ol.BingMapsStyle.AERIAL
    })
  }),
  new ol.layer.TileLayer({
    source: new ol.source.TileJSON({
      uri: 'http://api.tiles.mapbox.com/v3/mapbox.va-quake-aug.jsonp'
    })
  })
]);

var webglMap = new ol.Map({
  center: ol.Projection.transformWithCodes(
      new ol.Coordinate(-77.93255, 37.9555), 'EPSG:4326', 'EPSG:3857'),
  layers: layers,
  renderer: ol.RendererHint.WEBGL,
  target: 'webglMap',
  zoom: 5
});

var domMap = new ol.Map({
  renderer: ol.RendererHint.DOM,
  target: 'domMap'
});
domMap.bindTo('center', webglMap);
domMap.bindTo('layers', webglMap);
domMap.bindTo('resolution', webglMap);
domMap.bindTo('rotation', webglMap);
