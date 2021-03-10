## Functionality is still being added! This documentation is just a proof of concept at the moment

```js padded
<button>Test Button 1</button>
<button>Test Button 2</button>
<button>Test Button 3</button>
```

Our **Header** component:
```jsx { "props": { "className": "checks" } }
<Header navbarItems={[
  ['About Us', '/about'],
  ['FOSS', '/foss'],
  ['Mentorship', '/mentorship'],
  ['Contact', '/contact']
]}/>
```

... outside the editor too:
```jsx noeditor
<Header />
```

Let's highlight the _external library_ we are using: [react-use](https://github.com/streamich/react-use)
```jsx static
import { useMeasure } from "react-use";
// ...
const [ref, { height }] = useMeasure();
```

The demonstration is even cooler with propTypes too but Header doesn't have any at the moment