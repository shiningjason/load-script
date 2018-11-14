# @shinin/load-script · [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/shiningjason/load-script/blob/master/LICENSE) [![npm](https://img.shields.io/npm/v/@shinin/load-script.svg)](https://www.npmjs.com/package/@shinin/load-script) [![Build Status](https://travis-ci.org/shiningjason/load-script.svg?branch=master)](https://travis-ci.org/shiningjason/load-script)

`@shinin/load-script` is a simple async script loader for modern browsers.

### 3 seconds quick view

```js
import loadScript from '@shinin/load-script'

export default async function loadSDK() {
  await loadScript('http://foo.bar/sdk.js')
  // Now, you can do what you want after SDK.js has loaded...
}
```

## Installation
```
npm install @shinin/load-script --save
```

Also you can use `@shinin/load-script` as a `<script>` tag from a [CDN](https://unpkg.com/@shinin/load-script/dist/load-script.min.js).

```html
<!-- Use promise-polyfill only if you want to support old browsers. -->
<!-- <script src="https://unpkg.com/promise-polyfill"></script> -->
<script src="https://unpkg.com/@shinin/load-script/dist/load-script.min.js"></script>
```

## Browser Support

- Chrome
- Firefox
- Safari 7.1+
- Safari 5.1+ (with [promises-polyfill](https://github.com/taylorhakes/promise-polyfill))
- IE 8+ (with [promises-polyfill](https://github.com/taylorhakes/promise-polyfill))

## License

[MIT](https://github.com/shiningjason/load-script/blob/master/LICENSE)
