[![GitHub license](https://img.shields.io/github/license/tomanagle/Apollo-Next.js-GraphQL-starter.svg)](https://github.com/tomanagle/Apollo-Next.js-GraphQL-starter/blob/master/LICENSE)

Returns an array of objects that are unique by your selected key.

`yarn add @tomanagle/deepset`

`npm i @tomanagle/deepset`

```JavaScript
import deepSet from '@tomanagle/deepset';

deepSet(
  [
    {
      name: 'Tom',
      age: 20
    },
    {
      name: 'Tom',
      age: 30
    },
    {
      name: 'Bob',
      age: 20
    }
  ],
  'name'
)

/* Result =
    {
        name: 'Tom',
        age: 20
    }, {
        name: 'Bob',
        age: 20
    }
*/
```

Time complexity: ~~11~~