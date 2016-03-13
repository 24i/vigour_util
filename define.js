'use strict'
/**
 * @function define
 * helper for Object.defineProperty on base classes
 * always sets configurable to true
 */
var define = Object.defineProperty
module.exports = function () {
  var val
  for (let i = 0, length = arguments.length; i < length; i++) {
    val = arguments[i]
    for (let key in val) {
      let definition = val[key]
      let type = typeof definition
      if (type === 'function' || type !== 'object' || val[key]._base_version) {
        definition = { value: definition }
      }
      definition.configurable = true
      define(this, key, definition)
    }
  }
}
