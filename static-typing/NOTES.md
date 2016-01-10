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
  return string.toLowerCase().replace(/(?:^|\s|-)\S/g, (c) => c.toUpperCase())
}
```

Let's real-ify

```typescript
interface ToStringable {
  toString: Function
}

function titleize(string: ToStringable) {}

class FancyString {}

titleize(new FancyString())
```

Everything in JS has a `toString()` function, so this is useless, right? Maybe,
but let's build a contrived example

```typescript
interface ToStringable {
  toString: () => string
}

function titleize(string: ToStringable) {}

class FancyString {
  toString() { return 10 } // what have you done!?!?
}

titleize(new FancyString()) // now we have a problem
```

#### Old school namespaces

We use old school namespaces. The best way to make this work is to use your `tsd.d.ts` file

```typescript
declare namespace CoolApp {
  namespace utils {
    function titleize(string: string): string
  }
}
```

#### imports and exports

ES6 goodness

```typescript
// utils.tsx
export function pickParty(context: string): Party {
  switch(context) {
    case 'parents are gone for the weekend':
      return new RowdyParty()
    case 'birthday':
      return new BirthdayParty()
    default:
      return new Party()
  }
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

#### React :sunglasses:

```typescript
interface Props {
  value?: string;
  defaultValue: string;
}

interface State {
  value: string;
}

const SlugInput = React.createClass<Props, State>({
  componentWillUpdate(nextProps: Props) {
    nextProps.value // this is autocompleted for you
  },

  render() {
    return (
      <input />
    )
  }
})
```

## Flow?

It's very similar. It's easy to use with Babel, but the tooling isn't anywhere near as good.

https://www.reddit.com/r/javascript/comments/39cere/typescript_vs_flow_results_from_our_investigation/

```javascript
interface ToStringable {
    toString: () => string
}

class NotStringable {
  // In flow, you see the error on number and string above because of the
  // interface mismatch
  toString(): number { return 9 }
}

function uppercase(string: ToStringable): string {
  return string.toString().toUpperCase()
}

uppercase(9) // "9"
uppercase({}) // "[OBJECT OBJECT]"
uppercase(new NotStringable()) // toUpperCase is not a function
uppercase("Daniel Ma") // "DANIEL MA"
```

## or just, drop some in?

https://github.com/codemix/babel-plugin-typecheck
https://github.com/gcanti/flowcheck

https://gcanti.github.io/flowcheck/demo/index.html

# contracts.ruby

```ruby
class TimeRange < Range
  include Contracts::Core

  Contract Time, Time, Contracts::Bool => nil
  def initialize(range_begin, range_end, exclude_end = false)
    super
  end
end
```

Benchmarks: http://adit.io/posts/2013-03-04-How-I-Made-My-Ruby-Project-10x-Faster.html
