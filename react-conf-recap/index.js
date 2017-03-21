import React from 'react'
import theme from './theme'
import reactLogo from "./assets/reactconf-logo.png"

import {
  Appear,
  Deck,
  Heading,
  Slide,
  Spectacle,
  Text,
  S,
  List,
  ListItem,
  Layout,
  Fit,
  Fill,
  Code,
  Image,
  CodePane,
  Link,
} from "spectacle";

const titleDefaults = {
  size: 3,
  lineHeight: 1.3,
  style: { fontWeight: "200" },
  margin: "0 0 20px",
}
const Title = (props) => <Heading {...{...titleDefaults, ...props}} />
const liDefaults = {
  textSize: "1.9rem",
}
class LI extends React.Component {
  render() {
    return <ListItem {...{...liDefaults, ...this.props}} />
  }
}


// setup
document.title = "ES.next Recap"

export default class ReactConfRecap extends React.Component {
  render() {
  return (
    <Deck transition={['slide']} progress="bar" theme={theme}>
      <Slide>
        <Image src={reactLogo} style={{ width: "40%" }} />
        <Title>ES.next Recap</Title>
      </Slide>
      <Slide>
        <Title>Ben Ilegbodu</Title>
        <Text>@benmvp</Text>
        <Text>benmvp.com</Text>
      </Slide>
      <Slide>
        <Title>Destructuring</Title>
        <CodePane lang="javascript" source={require("raw-loader!./examples/destructuring.js")} />
      </Slide>
      <Slide>
        <Title>Argument Destructuring</Title>
        <CodePane lang="javascript" source={`// Component({ name: "name", value: "Daniel" })

function Component({ name, value }) {
  return <input name={name} value={value} />
}
`} />
      </Slide>
      <Slide>
        <Title>Nested Destructuring</Title>
        <CodePane lang="javascript" source={
`const object = {
  people: [new Person(), new Person()],
  settings: {
    showTopbar: false,
  }
}

//      renamed ▼             nested ▼
const { people: persons, settings: { showTopbar } = object

persons     // => [Person {}, Person {}]
settings    // => undefined
showTopbar  // => false
`} />
      </Slide>
      <Slide>
        <Title>Spread Operator</Title>
        <CodePane lang="javascript" source={
`/* Object spread */
const oldObject = { id: 1, name: "Daniel" }

const newObject = _.assign({}, oldObject, { age: 42 })
// vs
const newObject = { ...oldObject, age: 42 }

/* Array spread */
const oldArray = [2, 3, 5, 7]

const newArray = oldArray.slice().concat([11])
// vs
const newArray = [...oldArray, 11]
`} />
      </Slide>
      <Slide>
        <Title>Arrow Functions</Title>
        <CodePane lang="javascript" source={
`this === window // => true

$("a").on("click", function() {
  this.nodeName === "A" // the <a> that was clicked
})

$("a").on("click", () => {
  this === window // => still the window
})
`} />
      </Slide>
      <Slide>
        <Title>Promises</Title>
        <CodePane lang="jsx" source={
`$.ajax({
  url: "/people.json",
  success: (data) => {
    console.log(data)
  }
})

// vs

fetch("people.json").
  then((data) => console.log(data))
`} />
      </Slide>
      <Slide>
        <Title>Error Handling</Title>
        <CodePane lang="jsx" source={
`fetch("people.json").
  then((data) => functionThatThrows(data)).
  catch((e) => console.error(e))
`} />
      </Slide>
      <Slide>
        <Title>Multiple Promises</Title>
        <CodePane lang="jsx" source={
`Promise.all([fetch("people.json"), fetch("groups.json")]).
  then((responses) => {
    const [people, groups] = responses
  })
`} />
      </Slide>
      <Slide>
        <Title>async/await</Title>
        <CodePane lang="jsx" source={
`// with Promises
function loadFirstPerson() {
  return fetch("people.json").
    then((data) => data[0])
}

loadFirstPerson().
  then((person) => this.setState({ person }))

// with async/await

// ▼ need to mark function as async
async function loadFirstPerson() {
  //             ▼ await acts like promise.then()
  const people = await fetch("people.json")
  return people[0]
}

const person = await loadFirstPerson()
this.setState({ person })
`} />
      </Slide>
      <Slide>
        <Title>Resources</Title>
        <Text>
          github.com/benmvp/react-esnext<br/><br/>
          bit.ly/react-conf-esnext<br/><br/>
          benmvp.com/speaking-videos
        </Text>
      </Slide>
    </Deck>
  )
  }
}
