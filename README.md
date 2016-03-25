<!-- VDOC.badges travis; standard; npm -->
<!-- DON'T EDIT THIS SECTION (including comments), INSTEAD RE-RUN `vdoc` TO UPDATE -->
[![Build Status](https://travis-ci.org/vigour-io/util.svg?branch=master)](https://travis-ci.org/vigour-io/util)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)
[![npm version](https://badge.fury.io/js/vigour-util.svg)](https://badge.fury.io/js/vigour-util)
<!-- VDOC END -->
# vigour-util

```sh
npm install vigour-util
```

This is a collection of small utility functions which can be required individually.

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
### Contents
---

- [isEmail](#isemail)
- [isHash](#ishash)
- [isNode](#isnode)
- [isNumber](#isnumber)
- [isNumberlike](#isnumberlike)
- [isStream](#isstream)
  - [isStream.readable](#isstreamreadable)
  - [isStream.writable](#isstreamwritable)
- [isTouch](#istouch)
- [isUrl](#isurl)
- [isPlainobj](#isplainobj)
- [isRemoved](#isremoved)
- [isEmpty](#isempty)
- [pathContains](#pathcontains)
- [uuid.val](#uuidval)
  - [uuid.generate](#uuidgenerate)
- [define](#define)
- [descriptors](#descriptors)
- [flatten](#flatten)
- [hash](#hash)
- [include](#include)
- [merge](#merge)
- [regenerator](#regenerator)
- [setwithpath](#setwithpath)
- [unflatten](#unflatten)
- [getReference](#getreference)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

---

<!-- VDOC.jsdoc isEmail -->
<!-- DON'T EDIT THIS SECTION (including comments), INSTEAD RE-RUN `vdoc` TO UPDATE -->
#### var valid = isEmail(val)

Checks whether provided parameter looks like a valid e-mail address
- **param** {*string*} val - the string to check
- **returns** {*boolean*} valid - `true` if `val` is a valid e-mail address, `false` otherwise
<!-- VDOC END -->

```javascript
var isEmail = require('vigour-util/is/email')
isEmail('dev@vigour..io') // false
isEmail('dev@vigour.io') // true
```

<!-- VDOC.jsdoc isHash -->
<!-- DON'T EDIT THIS SECTION (including comments), INSTEAD RE-RUN `vdoc` TO UPDATE -->
#### var looksLikeHash = isHash(val)

Checks is a string looks like a hash generated by the [`hash`](#hash) utility
- **param** {*string*} val - the string to check
- **returns** {*boolean*} looksLikeHash - `true` if `val` looks like a hash, `false` otherwise
<!-- VDOC END -->

```javascript
var isHash = require('vigour-util/is/hash')
isHash('asd654') // true
```

<!-- VDOC.jsdoc isNode -->
<!-- DON'T EDIT THIS SECTION (including comments), INSTEAD RE-RUN `vdoc` TO UPDATE -->
#### var runningInNode = isNode()
- **returns** runningInNode - `true` if in node context, `false` otherwise
<!-- VDOC END -->

```javascript
var isNode = require('vigour-util/is/node')
isNode() // true or false
```

<!-- VDOC.jsdoc isNumber -->
<!-- DON'T EDIT THIS SECTION (including comments), INSTEAD RE-RUN `vdoc` TO UPDATE -->
#### var finiteNumber = isNumber(value)

This just calls `lodash.isfinite` internally. See [those docs](https://lodash.com/docs#isFinite)
- **param** {*any*} value - The value to check
- **returns** {*boolean*} finiteNumber - Returns `true` if *value* is a finite number, `false` otherwise
<!-- VDOC END -->

```javascript
var isNumber = require('vigour-util/is/number')
isNumber(2) // true
isNumber('2') // false
```

<!-- VDOC.jsdoc isNumberLike -->
<!-- DON'T EDIT THIS SECTION (including comments), INSTEAD RE-RUN `vdoc` TO UPDATE -->
#### var looksLikeNumber = isNumberLike(val)

Checks whether provided parameter looks like a number
- **param** {*any*} val - the value to check
- **returns** {*boolean*} looksLikeNumber - `true` if `val` looks like a number, `false` otherwise
<!-- VDOC END -->

```javascript
var isNumberLike = require('vigour-util/is/numberlike')
isNumberLike('2') // true
isNumberLike('a') // false
```

<!-- VDOC.jsdoc isStream -->
<!-- DON'T EDIT THIS SECTION (including comments), INSTEAD RE-RUN `vdoc` TO UPDATE -->
#### var stream = isStream(val)

Checks whether provided argument is a stream
- **param** {*object*} val - the object to check
- **returns** {*boolean*} stream - `true` if `val` is a stream, `false` otherwise
<!-- VDOC END -->

```javascript
var stream = require('stream')
var rs = new stream.Readable()
var isStream = require('vigour-util/is/stream')
isStream(rs) // true
```

<!-- VDOC.jsdoc isStream.readable -->
<!-- DON'T EDIT THIS SECTION (including comments), INSTEAD RE-RUN `vdoc` TO UPDATE -->
#### var readable = isStream.readable(val)

Checks whether provided argument is a readable stream
- **param** {*object*} val - the object to check
- **returns** {*boolean*} readable - `true` if `val` is a readable stream, `false` otherwise
<!-- VDOC END -->

```javascript
var stream = require('stream')
var rs = new stream.Readable()
var isStream = require('vigour-util/is/stream')
isStream.readable(rs) // true
```

<!-- VDOC.jsdoc isStream.writable -->
<!-- DON'T EDIT THIS SECTION (including comments), INSTEAD RE-RUN `vdoc` TO UPDATE -->
#### var writable = isStream.writable(val)

Checks whether provided argument is a writable stream
- **param** {*object*} val - the object to check
- **returns** {*boolean*} writable - `true` if `val` is a writable stream, `false` otherwise
<!-- VDOC END -->

```javascript
var stream = require('stream')
var rs = new stream.Readable()
var isStream = require('vigour-util/is/stream')
isStream.writable(rs) // false
```

<!-- VDOC.jsdoc isTouch -->
<!-- DON'T EDIT THIS SECTION (including comments), INSTEAD RE-RUN `vdoc` TO UPDATE -->
#### var touch = isTouch()

Checks if we're running in a touch-enabled context
- **returns** {*boolean*} touch - `true` if we're in a touch-enabled context, `false` otherwise
<!-- VDOC END -->

```javascript
var isTouch = require('vigour-util/is/touch')
isTouch() // false unless you're using a touch-enabled device
```

<!-- VDOC.jsdoc isUrl -->
<!-- DON'T EDIT THIS SECTION (including comments), INSTEAD RE-RUN `vdoc` TO UPDATE -->
#### var valid = isUrl(val)

Checks if a string is a valid url
- **param** {*string*} val - the string to check
- **returns** {*boolean*} valid - `true` if *val* is a valid url, `false` otherwise
<!-- VDOC END -->

```javascript
var isUrl = require('vigour-util/is/url')
isUrl('http://perdu.com') // true
isUrl('boom') // false
```

<!-- VDOC.jsdoc isPlainObj -->
<!-- DON'T EDIT THIS SECTION (including comments), INSTEAD RE-RUN `vdoc` TO UPDATE -->
#### var plain = isPlainObj(obj)

Checks whether an object is a plain object (*Compatible with `vigour-base`*)
- **param** {*object*} obj - the object to check
- **returns** {*boolean*} plain - `true` if *obj* is a plain object, `false` otherwise
<!-- VDOC END -->

```javascript
var isPlainObj = require('vigour/util/is/plainobj')
isPlainObj({}) // true
isPlainObj(new Base({})) // false
```

<!-- VDOC.jsdoc isRemoved -->
<!-- DON'T EDIT THIS SECTION (including comments), INSTEAD RE-RUN `vdoc` TO UPDATE -->
#### var removed = isRemoved(base)

Checks if a property has been removed (*Specific to `vigour-base`*)
- **param** {*Base*} base - the property to check
- **returns** {*boolean*} removed - `true` if *base* property has been removed, `false` otherwise
<!-- VDOC END -->

```javascript
var isRemoved = require('vigour-util/is/removed')
var Base = require('vigour-base')
var base = new Base({ bad: true })
base.bad.remove()
isRemoved(base.bad) // true
```

<!-- VDOC.jsdoc isEmpty -->
<!-- DON'T EDIT THIS SECTION (including comments), INSTEAD RE-RUN `vdoc` TO UPDATE -->
#### var emptyBase = isEmpty(obj)

Checks if a `Base` object is empty (*Specific to `vigour-base`*)
- **param** {*object*} obj - the object to check for emptiness
- **returns** {*boolean*} emptyBase - `true` if `obj` is considered empty, `false` otherwise
<!-- VDOC END -->

```javascript
var isEmpty = require('vigour-util/is/empty')
var Base = require('vigour-base')
isEmpty(new Base({})) // true
isEmpty(new Base({ awesome: true })) // false
```

Checks whether a key is part of an array, allowing for prefixed keys
<!-- VDOC.jsdoc path.contains -->
<!-- DON'T EDIT THIS SECTION (including comments), INSTEAD RE-RUN `vdoc` TO UPDATE -->
#### var found = pathContains(path, key)

Checks whether a key is part of an array, allowing for prefixed keys
- **param** {*array*} path - the array to look in
- **param** {*string*} key - the key to check for
- **returns** {*boolean*} found - `true` if *key* is found in *array*, `false` otherwise
<!-- VDOC END -->

```javascript
var pathContains = require('vigour-util/path/contains')
pathContains(['a','awesome:b','c'], 'b') // true
```

### uuid
<!-- VDOC.jsdoc uuid.val -->
<!-- DON'T EDIT THIS SECTION (including comments), INSTEAD RE-RUN `vdoc` TO UPDATE -->
#### .val



A process-specific unique ID, generated on `require`
<!-- VDOC END -->

```javascript
var uuid = require('vigour-util/uuid')
uuid.val // 'oj0beu'
```

<!-- VDOC.jsdoc uuid.generate -->
<!-- DON'T EDIT THIS SECTION (including comments), INSTEAD RE-RUN `vdoc` TO UPDATE -->
#### var id = uuid.generate()

Generates a unique ID
- **returns** {*string*} id - A unique ID
<!-- VDOC END -->

```javascript
var uuid = require('vigour-util/uuid')
uuid.generate() // '14hdmru'
```

<!-- VDOC.jsdoc define -->
<!-- DON'T EDIT THIS SECTION (including comments), INSTEAD RE-RUN `vdoc` TO UPDATE -->
#### define(props)

Defines new (or modifies existing) properties (using [`Object.defineProperty`](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty)) on an object passed to `define` as `this`, setting `configurable: true` by default
- **param** {*object*} props - Properties to set
<!-- VDOC END -->

```javascript
var define = require('vigour-util/define')
var subject = {}
var props = [
  { one: true },
  { two: function () {
      console.log('do nothing')
    }
  }
]
define.apply(subject, props)
```

<!-- VDOC.jsdoc descriptors -->
<!-- DON'T EDIT THIS SECTION (including comments), INSTEAD RE-RUN `vdoc` TO UPDATE -->
#### descriptors(props)

Like [`Object.getOwnPropertyDescriptor`](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptor), but goes along the prototype chain and gets the descriptors for all properties.
- **param** {*object*} props - the properties to get the descriptors for
<!-- VDOC END -->

```javascript
var descriptors = require('vigour-util/descriptors')
descriptors({ a: 'a', b: 'b' })
/*
  {
    a: {
      value: 'a',
      writable: true,
      enumerable: true,
      configurable: true
    },
    b: {
      value: 'a',
      writable: true,
      enumerable: true,
      configurable: true
    }
  }
*/
```

<!-- VDOC.jsdoc flatten -->
<!-- DON'T EDIT THIS SECTION (including comments), INSTEAD RE-RUN `vdoc` TO UPDATE -->
#### var *object* = Take a nested Javascript object and flatten it(subject)

Transforms a deep object into an object of single depth where keys are a path and values are leafs of the original object.
- **param** {*object*} subject - Object that needs to be flattened
- **param** {*string*} [seperator] - Optional seperator sign
- **return** {*object*} - Object with delimited keys
<!-- VDOC END -->

```javascript
var flatten = require('vigour-util/flatten')
flatten({ a: { b: 'c', d: 'e' } }) // { 'a.b': 'c', 'a.d': 'e'}
flatten({ a: { b: 'c', d: 'e' } }, '/') // { 'a/b': 'c', 'a/d': 'e'}
```

<!-- VDOC.jsdoc hash -->
<!-- DON'T EDIT THIS SECTION (including comments), INSTEAD RE-RUN `vdoc` TO UPDATE -->
#### var hashOfKey = hash(key, seed)

Hashing utility optimized for speed, not collision avoidance. Produces alpha-numeric hashes between 5 and 7 characters long inclusively.
- **param** {*string*} key - the string to hash
- **param** {*number*} seed - a seed for hashing
- **returns** {*string*} hashOfKey - The created hash
<!-- VDOC END -->

```javascript
var hash = require('vigour-util')
hash('Any sting in the world!!!') // '16hck72'
```

### include
Docs coming soon

### merge
***Deprecated***: consider using [`lodash.merge`](https://www.npmjs.com/package/lodash.merge)

<!-- VDOC.jsdoc regenerator -->
<!-- DON'T EDIT THIS SECTION (including comments), INSTEAD RE-RUN `vdoc` TO UPDATE -->
#### regenerator()

Like Babel's regenerator, but much more compact. Brought to you by Facebook, but bundled in `vigour-util` for ease-of-use. See [the docs](https://github.com/facebook/regenerator)
<!-- VDOC END -->

### setwithpath
***Deprecated***: consider using [`lodash.set`](https://www.npmjs.com/package/lodash.set)

<!-- VDOC.jsdoc unflatten -->
<!-- DON'T EDIT THIS SECTION (including comments), INSTEAD RE-RUN `vdoc` TO UPDATE -->
#### var obj = unflatten(subject)

Opposite of [`flatten`](#flatten). Unflattens an object with delimited keys
- **param** {*object*} subject - Object that needs to be unflattened
- **param** {*string*} [seperator] - Optional seperator sign
- **return** {*object*} obj - Nested Javascript object
<!-- VDOC END -->

```javascript
var unflatten = require('vigour-util')
unflatten({
  'a.b.c': 'd'
})
/*
{
  a: {
    b: {
      c: 'd'
    }
  }
}
*/
```

<!-- VDOC.jsdoc get.reference -->
<!-- DON'T EDIT THIS SECTION (including comments), INSTEAD RE-RUN `vdoc` TO UPDATE -->
#### var ref = getReference(obj)

Get's the referenced object (*Specific to `vigour-base`*)
- **param** {*object*} obj - the reference we want to follow
- **returns** {*object*} ref - The referenced object or `undefined`
<!-- VDOC END -->

```javascript
var Base = require('vigour-base')
var getReference = require('../../get/reference')

var a = new Base({})
var b = new Base(a)
getReference(b) // a
```
