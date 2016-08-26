## true-bool
Convert any value to boolean(like Python `bool()`).

### description
Zero-dependency module that converts any type value to boolean.  
Empty objects, arrays, maps, sets - are converted to false.

```javascript
var bool = require('true-bool');

bool(false); // false
bool(null); // false
bool(undefined); // false
bool(''); // false
bool(0); // false
bool(-0); // false
bool(+0); // false
bool([]); // false
bool({}); // false
bool(NaN); // false
bool(new Map()); // false
bool(new Set()); // false
bool(true); // true
bool('foo'); // true
bool(1); // true
bool(-1); // true
bool([1, 2]); // true
bool({'foo': 'bar'}); // true
bool(new Map([['foo', 'bar']])); // true
bool(new Set([1,2,3])); // true
```
### install
npm install true-bool

### update
npm update true-bool

### uninstall
npm uninstall true-bool

### example
```javascript
var bool = require('true-bool');

function foo(v) {
    if (bool(v)) {
        operate(v);
    } else {
        throw new Error('Argument must be non-empty value!');
    }
}
```
