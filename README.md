This high order component allows rendering inline styles with the !important flag.

Install it with npm

```
npm install react-with-important-style
```

To use it, import it, and then wrap either a dom component or a custom component.


```js
import withImportantStyle from 'react-with-important-style';
var MySpan = withImportantStyle('span');
// or withImportantStyle(MyComponent);

var C = () => <MySpan style={{backgroundColor: 'red !important'}} />;
```

That's it!

