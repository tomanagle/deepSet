Returns an array of objects that are unique by your selected key.

yarn add @tomanagle/deepset

npm i @tomanagle/deepset

import deepSet from '@tomanagle/deepset';

```javascript
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
