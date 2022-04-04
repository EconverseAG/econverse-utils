# econverse-utils

![npm](https://img.shields.io/npm/v/econverse-utils?color=green&style=flat-square)
![GitHub](https://img.shields.io/github/license/EduardoRodriguesF/econverse-utils?color=red&style=flat-square)

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

If importing `econverse-utils/vtex` throws an error, you can still import it from `econverse-utils/lib/vtex`. (THIS WILL BE FIXED IN LATER VERSIONS)

## Documentation

- [General utils](./docs/UTILS.md);
- [VTEX utils](./docs/VTEX.md);

## License

This project is under the MIT license. See the [LICENSE file](./LICENSE) for details