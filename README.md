jsss-contextual
===============

A contextual method in JSSS

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
