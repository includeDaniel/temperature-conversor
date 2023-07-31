# Temperature-Conversor
[![main](https://github.com/includeDaniel/fibonacci/actions/workflows/main.yml/badge.svg)](https://github.com/includeDaniel/temperature-conversor/actions/workflows/main.yml)
[![npm version](https://img.shields.io/npm/v/@includedaniel/temperature-conversor.svg?style=flat)](https://www.npmjs.com/package/@includedaniel/temperature-conversor)
[![codecov](https://codecov.io/gh/includeDaniel/temperature-conversor/branch/main/graph/badge.svg?token=JZWXY20HCS)](https://codecov.io/gh/includeDaniel/temperature-conversor)

```
npm i @includedaniel/temperature-conversor
```

```
yarn add @includedaniel/temperature-conversor
```

Usage:

```js
//module
import { temperatureConversor } from "@includedaniel/temperature-conversor"
console.log(temperatureConversor("C", "F", 30)) // 86
```

```js
//commomjs
const {temperatureConversor,} = require("@includedaniel/temperature-conversor")
console.log(temperatureConversor("C", "F", 30)) // 86
```

Running tests:

-   Run `yarn test` to execute the tests and export the reports to `/coverage` folder

Running lint:

-  Run `yarn lint` to execute the eslint to fix and find problems in your code
-  want to know more about eslint commands? [Follow the link](https://eslint.org/docs/latest/use/command-line-interface)

Running prettier:

-  Run `yarn format` to format the code according to established standards
-  Run `yarn type-check` to check the types in your code

Running rollup:

-  Run `yarn build` to execute the rollup
-  [Link for commands line flags of rollup](https://rollupjs.org/command-line-interface/#command-line-flags)
