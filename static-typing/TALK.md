From ruby, to contracts, to crystal

contracts use case in service objects

From js, to typecheck, to typescript

# Intro

Why am I here?

Because I spent a year working in C#, and if I'm honest with myself, I miss it.

I miss having all the information about everything pop up in front of me. I like vim for modal editing and I feel really cool with my mac and never leaving the terminal, but compiler steps and avoiding runtime errors is awesome.

Just yesterday, I saw this tweet about elm and it reminded me of how nice it can be to know if something is going to break before you deploy it.

There are two large schools of thought about correctness. These are broad generalizations. Don't bite my head off. As a rule, the static typing crowd relies on the compiler to know if a program is correct, while the dynamic crod relies on tests to know if a program is correct. However, both have their shortcomings. Compilers can assure you that your code will run, but not that your code will do what you want. Tests can assure you that your code will do what you want, but not that one part of your code will call another part with the wrong arguments and you'll kill the production server.

They both have issues, so maybe there's a middle ground where we can have a little bit of both?

I'll talk about 3 main projects here.

1. [Typescript][typescript-home]
2. [Flow][flow-home]
3. [contracts.ruby][contracts-ruby-home]

# Typescript & Flow

Typescript and flow both exist to bring types and type assurance to Javascript.

If you look around the internet for comparisons of Typescript and Flow, you'll probably find [this reddit thread](https://www.reddit.com/r/javascript/comments/39cere/typescript_vs_flow_results_from_our_investigation/). However, that was a whole 7 months ago. So let's look at it now.

These guys did a good job with their summary, and what it basically came down to was this: Typescript has good dev tools, but flow can be introduced piecemeal. However, this is a lot less true than it was before. Typescript used to be more strict, but it now assumes that anything it doesn't recognize is an `any` (which means exactly what you think it means)

The one major gotcha that continues with Typescript is that you have to use the `.ts` extension. This can be a little weird, but it's trivial to enable in webpack. Tell the babel-loader to use the `/\.ts$/` extension. Trivial in Rails as well.

Let's look at a hello world example in JS vs Typescript

```javascript
console.log("Hello world!")
```

```typescript
console.log("Hello world!")
```

:troll:

Before I get too into this, I want to say that you can probably start using flow/typescript syntax today because babel strips types out by default. That's a big part of my point in doing this talk. It might make your life easier, and it might be easier to start than you would think.

Here's an idea! Let's get something using `jQuery.ajax`

```typescript
import $ from 'jquery'

$.ajax({
  url: "/posts",
  complete(xhr) {

  },
  success(data) {

  }
})
```

Now, there are some weird things about this snippet here. First off, `success` and `complete` do _similar_ things, but slightly different. How do we know which is which? Well, you could have Dash/jQuery.org/DevDocs open, or you could just hit `ctrl-space`

`open vscode`

Once that's there, we can see some info on the types returned. (it's truncated now, but a fix for truncation was merged ~24 hours ago)

Now that you have your `xhr`, you can mouse over or `ctrl-space` to see all the methods on it.

`react sample`

`nil method error sample`

For runtime stuff, babel-typecheck plugin

An old sample, but you get the idea

```javascript
function findInGraph(graph, entity) {
  if (typeof graph !== 'object') throw new TypeError('Value of argument \'graph\' violates contract, expected object got ' + (graph === null ? 'null' : graph instanceof Object && graph.constructor ? graph.constructor.name : typeof graph));

  return graph
}

findInGraph('hi!') // TypeError("Value of argument 'graph' violates contract, expected object got String")
```


[typescript-home]: http://www.typescriptlang.org/
[flow-home]: http://flowtype.org/
[contracts-ruby-home]: http://egonschiele.github.io/contracts.ruby/



