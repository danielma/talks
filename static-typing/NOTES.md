# Static Typing in Dynamic Languages

Or, being a little more correct

## Typescript

### Editor Support

Install Visual Studio Code or `atom-typescript`

### DefinitelyTyped

The repo/github org for Typescript definitions

```bash
$ npm install -g tsd
$ tsd init
$ tsd install jquery --save
```

Now you have jQuery types!

If you use atom, probably use `tsconfig.json` to control compile and build on save

I had better luck with Visual Studio Code

Sample code

```javascript
function titleize(string) {
  return string.toString().toLowerCase().replace(/(?:^|\s|-)\S/g, (c) => c.toUpperCase())
}
```

Let's simplify

```typescript
function titleize(string: string): string { // now we'll just get an error if someone sends something that's not a string
  return string.toString().toLowerCase().replace(/(?:^|\s|-)\S/g, (c) => c.toUpperCase())
}
```

Let's real-ify

```typescript
interface ToStringable {
  toString: Function
}

function titleize(string: ToStringable) {}

class Yolo {}

titleize(new Yolo())
```

Everything in JS has a `toString()` function, so this is useless, right? Maybe,
but let's build a contrived example

```typescript
interface ToStringable {
  toString: () => string
}

function titleize(string: ToStringable) {}

class Yolo {
  toString() { return 10 } // what have you done!?!?
}

titleize(new Yolo()) // now we have a problem
```

#### Old school namespaces

We use old school namespaces. The best way to make this work is to use your `tsd.d.ts` file

```typescript
declare namespace CoolApp {
  namespace utils {
    function slugify(...strings: string[]): string
  }
}
```

#### imports and exports

ES6 goodness

```typescript
// utils.tsx
export function pickParty(context: string): Party {
  return new Party()
}

// components/party.jsx
import * as utils from './utils'

utils.pickParty('parents are gone for the weekend')
```

#### Issues

Polymorphic type functions

```typescript
// this compiles, but doesn't lint
const node = ReactDOM.findDOMNode(this) // it's an HTMLInputElement
node.selectionStart // TypeScript says this is an error because Element doesn't have selectionStart

// this lints, but babel doesn't strip out the gt lt symbols
const node = ReactDOM.findDOMNode<HTMLInputElement>(this)
node.selectionStart // a-OK

// workaround
function findInput(instance: React.ReactInstance): HTMLInputElement {
  return ReactDOM.findDOMNode(instance)
}

const node = findInput(this)
node.selectionStart // OK
```
