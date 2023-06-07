# pepto

[![NPM](https://nodei.co/npm/pepto.png)](https://nodei.co/npm/pepto/)

[![NPM version](https://img.shields.io/npm/v/pepto.svg)](https://www.npmjs.com/package/pepto)
[![build](https://github.com/encrypit/pepto/actions/workflows/build.yml/badge.svg)](https://github.com/encrypit/pepto/actions/workflows/build.yml)

Generate a hex string digest from a given message. See [`SubtleCrypto.digest()`](https://developer.mozilla.org/docs/Web/API/SubtleCrypto/digest) and [demo](https://replit.com/@remarkablemark/pepto).

## Quick Start

```ts
import { digest } from 'pepto';

await digest('SHA-256', 'Hello, World!');
```

## Installation

[NPM](https://www.npmjs.com/package/pepto):

```sh
npm install pepto
```

[Yarn](https://yarnpkg.com/package/pepto):

```sh
yarn add pepto
```

## Usage

Import ES Modules:

```ts
import { digest } 'pepto';
```

Require with CommonJS:

```ts
const { digest } = require('pepto');
```

Hash message with `SHA-1` algorithm:

```ts
await digest('SHA-1', 'message');
```

Hash message with `SHA-256` algorithm:

```ts
await digest('SHA-256', 'message');
```

Hash message with `SHA-384` algorithm:

```ts
await digest('SHA-384', 'message');
```

Hash message with `SHA-512` algorithm:

```ts
await digest('SHA-512', 'message');
```

Use promise instead of async-await:

```ts
digest('SHA-512', 'message').then((hex) => console.log(hex));
```

## License

[MIT](https://github.com/encrypit/pepto/blob/master/LICENSE)
