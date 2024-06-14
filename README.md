# Movies

This app allows users to filter movies by genre and sort them by score. Quickly find top-rated films tailored to your preferences.

## Technologies

- Core: `next`, `react`, `react-dom`, `Typescript`, `redux`, `axios`
- UI: `tailwind`

## Scripts

### `npm ... [packages]`

- **`install`** Install all dependencies
- **`uninstall`** Remove dependencies

### `npm run ...`

- **`dev`** Starts app in development mode.
- **`build`** Creates an optimized production build.
- **`test:e2e`** Starts cypress test IDE (Note: Before this step, please run project using `npm run dev`).

## Imports

> Try to use absolute paths, e.g. `'@redux/actions'` instead of `'../../actions'`.

**Note**: Most paths should refrence to directories and not files. So all folders should have an `index.ts` file which re-exports everything needed from there.

Order of imports:

```js
// node_modules
import React from 'react';
import React, { useState, useEffect, useRef } from 'react';
import { bindActionCreators } from 'redux';
import { useSelector, useDispatch } from 'react-redux';

// other: components, utils, actions, ...
import { fetchHumanResources } from 'src/redux/actions';

import Calendar from './calendar';

// assets
import { ReactComponent as Icon } from 'src/assets/icons/icon.svg';

// css
import css from './styles.module.scss';
```

## CSS

we can use [Tailwind](https://tailwindcss.com/) for CSS in JS purpose.

```js
const App = () => {
   return (
      <>
         <div className='bg-red-500'></div>
      </>
   );
};
```

## Functional Components Structure

> Any variable that is not depend on component state or props should be outside of on it!

Following is the order of logics inside component:

1. Expressions and Computations
2. useRefs, useContexts and useDispatch
3. Local State: useState and useReducer
4. Global State: useSelector
5. Side Effects: useEffect
6. Functions and Handlers
7. return (`<Element />`)

#### `Component.tsx`

```ts
const obj = {
    title: 'foo'
}

interface Props {
   foo: string;
   arr: any[];
};

const Component:React.FC<Props> = ({foo, arr}) => {
    const x = ()=> { };

    const ref = useRef(null);
    const { value } = useContext(context);
    const dispatch = useDispatch();

    const [state, state] = useState(false);
    const [state2, dispatchLocal] = useReducer(reducer, initialState);

    const { ... } = useSelector(selector);

    const y = useMemo(() => /* computations */, [])

    const clickHandler = e => {}

    useEffect(() => /* side effects */, []);

    return (
        <div onClick={clickHandler} foo={foo}>
            Hello World!
        </div>
    )
}

export default Component;
```
