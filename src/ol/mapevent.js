goog.provide('ol.MapEvent');

goog.require('goog.events.Event');



/**
 * @constructor
 * @extends {goog.events.Event}
 * @param {string} type Event type.
 * @param {ol.Map} map Map.
 */
ol.MapEvent = function(type, map) {

  goog.base(this, type);

  /**
   * @type {ol.Map}
   */
  this.map = map;

  /**
   * @type {boolean}
   */
  this.defaultPrevented = false;

};
goog.inherits(ol.MapEvent, goog.events.Event);


/**
 * Prevents the default action.
 */
ol.MapEvent.prototype.preventDefault = function() {
  goog.base(this, 'preventDefault');
  this.defaultPrevented = true;
};
