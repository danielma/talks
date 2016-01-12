import React from 'react'
import theme from './theme'

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
} from "spectacle";

const titleDefaults = {
  size: 3,
  lineHeight: 1.3,
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
document.title = "Static Typing in Dynamic Languages"

export default class StaticTypingPresentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={['slide']} progress="bar">
          <Slide>
            <Title>Static Typing in Dynamic Languages</Title>
            <Text>@danielhgma</Text>
            <Text>github.com/danielma</Text>
          </Slide>
          <Slide>
            <Title>Static vs Dynamic</Title>
            <Layout>
              <Fill>
                <List>
                  <Appear><LI>Compiler step</LI></Appear>
                  <Appear><LI>Type assurance</LI></Appear>
                  <Appear><LI>Correctness by static analysis</LI></Appear>
                </List>
              </Fill>
              <Fill>
                <List>
                  <Appear><LI>No compiler</LI></Appear>
                  <Appear><LI>Duck typing</LI></Appear>
                  <Appear><LI>Correctness by testing</LI></Appear>
                </List>
              </Fill>
            </Layout>
          </Slide>
          <Slide>
            <Heading size={3} fit>What does it mean to be correct?</Heading>

            <List>
              <Appear><LI>Static: ask the compiler</LI></Appear>
              <Appear><LI>Dynamic: ask the tests</LI></Appear>
            </List>
          </Slide>
          <Slide>
            <Image src="http://i2.kym-cdn.com/photos/images/original/000/538/731/0fc.gif"></Image>
          </Slide>
        </Deck>
      </Spectacle>
    )
  }
}
