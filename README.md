# econverse-utils

![npm](https://img.shields.io/npm/v/econverse-utils)

## Usage

In order to use, you will need to install `econverse-utils` as a package:

```bash
yarn add econverse-utils
# npm install econverse-utils
```

For generic utilities, like `formatMoney`, you should import directly from the library:
```js
import { formatMoney } from 'econverse-utils'
```

For VTEX-specific utilities, like `getProductById`, you should import from `econverse-utils/vtex`:
```js
import { getProductById } from 'econverse-utils/vtex'
```

## Documentation

- [General utils](./docs/UTILS.md);
- [VTEX utils](./docs/VTEX.md);