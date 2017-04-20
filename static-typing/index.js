import React from 'react'
import theme from './theme'
import preloader from 'spectacle/lib/utils/preloader'

const images = {
  apple: require("./assets/apple-bg.jpg")
}

preloader(images)

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
      <Deck transition={['slide']} progress="bar" theme={theme}>
        <Slide>
          <Title>Static Typing in Dynamic Languages</Title>
          <Text>@danielhgma</Text>
          <Text>github.com/danielma</Text>
        </Slide>
        <Slide>
          <Title>Why am I here?</Title>
          <Appear>
            <Text>I like static types</Text>
          </Appear>
          <Appear>
            <Text>I like Visual Studio</Text>
          </Appear>
        </Slide>
        <Slide>
          <Title>Is it correct?</Title>
          <Layout>
            <Fill />
            <Fill>
              <List>
                <LI>Ask the compiler</LI>
                <LI>Ask your test suite</LI>
                <Appear>
                  <LI>Ask them both?</LI>
                </Appear>
              </List>
            </Fill>
            <Fill />
          </Layout>
        </Slide>
        <Slide>
          <Title>Four Projects</Title>
          <Layout>
            <Fill />
            <Fill>
              <List>
                <LI>contracts.ruby</LI>
                <LI>Crystal</LI>
                <LI>babel-typecheck</LI>
                <LI>Typescript</LI>
              </List>
            </Fill>
            <Fill />
          </Layout>
        </Slide>
        <Slide>
          <Title>Ruby</Title>
        </Slide>
        <Slide>
          <Title>contracts.ruby</Title>
          <Appear><Text>Runtime type checking for Ruby</Text></Appear>
        </Slide>
        <Slide>
          <CodePane lang="ruby" source={require("raw-loader!./assets/contracts.rb")}/>
        </Slide>
        <Slide>
          <CodePane source={require("raw-loader!./assets/contracts-error.txt")}/>
        </Slide>
        <Slide>
          <CodePane lang="ruby" source={require("raw-loader!./assets/contracts-service-before.rb")}/>
        </Slide>
        <Slide>
          <CodePane lang="ruby" source={require("raw-loader!./assets/contracts-service.rb")}/>
        </Slide>
        <Slide>
          <Title>contracts.ruby</Title>
          <Appear><Text>Yes, it&#39;s a little slow</Text></Appear>
          <Appear>
            <Link href="http://adit.io/posts/2013-03-04-How-I-Made-My-Ruby-Project-10x-Faster.html">But not too much</Link>
          </Appear>
          <Appear>
            <Text>And it can be disabled in production with an environmental variable</Text>
          </Appear>
        </Slide>
        <Slide>
          <Title>Crystal</Title>
          <Appear>
            <CodePane lang="ruby" source={`puts "Hello world"`} />
          </Appear>
          <Appear>
            <CodePane lang="ruby" source={`def fibonacci(n)
return n if n <= 1
fibonacci(n - 1) + fibonacci(n - 2)
end
puts fibonacci 40`} />
          </Appear>
          <Text>&nbsp;</Text>
          <Appear>
            <Link href="http://crystal-lang.org/">http://crystal-lang.org/</Link>
          </Appear>
        </Slide>
        <Slide>
          <Title>Javascript</Title>
          <Appear>
            <Text>Actually, Babel</Text>
          </Appear>
        </Slide>
        <Slide>
          <Title>babel-typecheck-plugin</Title>
          <CodePane lang="typescript" source={require("raw-loader!./assets/babel-typecheck.ts")} />
          <Text>&nbsp;</Text>
          <Appear>
            <Text>
              Also, flowtype.js
            </Text>
          </Appear>
        </Slide>
        <Slide>
          <Title>Typescript</Title>
        </Slide>
        <Slide bgImage={images.apple.replace("/", "")}>
          <Title textColor="#fff" textFont="Myriad Pro">Available today for $199</Title>
        </Slide>
        <Slide>
          <Title>Recap</Title>
          <Text>Be more correct, have more confidence, write beautifullly</Text>
        </Slide>
        <Slide>
          <Text>@danielhgma</Text>
          <Text>github.com/danielma/talks</Text>
        </Slide>
      </Deck>
    )
  }
}
