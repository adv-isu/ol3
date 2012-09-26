goog.provide('ol.layer.Layer');
goog.provide('ol.layer.LayerProperty');

goog.require('goog.math');
goog.require('ol.Object');
goog.require('ol.Store');


/**
 * @enum {string}
 */
ol.layer.LayerProperty = {
  BRIGHTNESS: 'brightness',
  CONTRAST: 'contrast',
  HUE: 'hue',
  OPACITY: 'opacity',
  SATURATION: 'saturation',
  VISIBLE: 'visible'
};



/**
 * @constructor
 * @extends {ol.Object}
 * @param {ol.Store} store Store.
 * @param {Object.<string, *>=} opt_values Values.
 */
ol.layer.Layer = function(store, opt_values) {

  goog.base(this);

  /**
   * @private
   * @type {ol.Store}
   */
  this.store_ = store;

  this.setBrightness(0);
  this.setContrast(0);
  this.setHue(0);
  this.setOpacity(1);
  this.setSaturation(0);
  this.setVisible(true);

  if (goog.isDef(opt_values)) {
    this.setValues(opt_values);
  }

};
goog.inherits(ol.layer.Layer, ol.Object);


/**
 * @expose
 * @return {number} Brightness.
 */
ol.layer.Layer.prototype.getBrightness = function() {
  return /** @type {number} */ this.get(ol.layer.LayerProperty.BRIGHTNESS);
};


/**
 * @expose
 * @return {number} Contrast.
 */
ol.layer.Layer.prototype.getContrast = function() {
  return /** @type {number} */ this.get(ol.layer.LayerProperty.CONTRAST);
};


/**
 * @expose
 * @return {number} Hue.
 */
ol.layer.Layer.prototype.getHue = function() {
  return /** @type {number} */ this.get(ol.layer.LayerProperty.HUE);
};


/**
 * @expose
 * @return {number} Opacity.
 */
ol.layer.Layer.prototype.getOpacity = function() {
  return /** @type {number} */ this.get(ol.layer.LayerProperty.OPACITY);
};


/**
 * @expose
 * @return {number} Saturation.
 */
ol.layer.Layer.prototype.getSaturation = function() {
  return /** @type {number} */ this.get(ol.layer.LayerProperty.SATURATION);
};


/**
 * @return {ol.Store} Store.
 */
ol.layer.Layer.prototype.getStore = function() {
  return this.store_;
};


/**
 * @expose
 * @return {boolean} Visible.
 */
ol.layer.Layer.prototype.getVisible = function() {
  return /** @type {boolean} */ this.get(ol.layer.LayerProperty.VISIBLE);
};


/**
 * @return {boolean} Is ready.
 */
ol.layer.Layer.prototype.isReady = function() {
  return this.getStore().isReady();
};


/**
 * @expose
 * @param {number} brightness Brightness.
 */
ol.layer.Layer.prototype.setBrightness = function(brightness) {
  brightness = goog.math.clamp(brightness, -1, 1);
  if (brightness != this.getBrightness()) {
    this.set(ol.layer.LayerProperty.BRIGHTNESS, brightness);
  }
};


/**
 * @expose
 * @param {number} contrast Contrast.
 */
ol.layer.Layer.prototype.setContrast = function(contrast) {
  contrast = goog.math.clamp(contrast, -1, 1);
  if (contrast != this.getContrast()) {
    this.set(ol.layer.LayerProperty.CONTRAST, contrast);
  }
};


/**
 * @expose
 * @param {number} hue Hue.
 */
ol.layer.Layer.prototype.setHue = function(hue) {
  if (hue != this.getHue()) {
    this.set(ol.layer.LayerProperty.HUE, hue);
  }
};


/**
 * @expose
 * @param {number} opacity Opacity.
 */
ol.layer.Layer.prototype.setOpacity = function(opacity) {
  opacity = goog.math.clamp(opacity, 0, 1);
  if (opacity != this.getOpacity()) {
    this.set(ol.layer.LayerProperty.OPACITY, opacity);
  }
};


/**
 * @expose
 * @param {number} saturation Saturation.
 */
ol.layer.Layer.prototype.setSaturation = function(saturation) {
  saturation = goog.math.clamp(saturation, -1, 1);
  if (saturation != this.getSaturation()) {
    this.set(ol.layer.LayerProperty.SATURATION, saturation);
  }
};


/**
 * @expose
 * @param {boolean} visible Visible.
 */
ol.layer.Layer.prototype.setVisible = function(visible) {
  visible = !!visible;
  if (visible != this.getVisible()) {
    this.set(ol.layer.LayerProperty.VISIBLE, visible);
  }
};
