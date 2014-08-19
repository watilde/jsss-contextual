jsss-contextual
===============

A contextual method in JSSS

## Badged
+ [![NPM Version](http://img.shields.io/npm/v/jsss-contextual.svg)](https://www.npmjs.org/package/jsss-contextual)
+ [![MIT LICENSE](http://img.shields.io/badge/license-MIT-brightgreen.svg)](https://github.com/watilde/jsss-contextual/blob/master/LICENSE)
+ [![Build Status](https://api.travis-ci.org/watilde/jsss-contextual.svg)](https://travis-ci.org/watilde/jsss-contextual)

## Install

Using npm.
```
$ npm install --save-dev jsss-contextual
```

## Example
style.js
```js
contextual(tags.UL, tags.LI, {color: 'red'});
contextual(tags.UL, tags.LI, {fontSize: '10px'});
```

compile
```
$ jsss style.js style.css
```

style.css
```css
UL {
    color: red;
      font-size: 10px;
}

LI {
    color: red;
      font-size: 10px;
}
```
