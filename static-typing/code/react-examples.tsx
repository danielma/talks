import * as React from 'react'

interface PersonIntroductionProps {
  name: string,
  age?: number
}

class PersonIntroduction extends React.Component<PersonIntroductionProps, {}> {
  getDefaultProps() {
    return {
      age: 100
    }  
  }
  
  render() {
    return <div>Hello, I am {this.props.name} and I am {this.props.age} years old</div>
  }
}

class App extends React.Component<{}, {}> {
  render() {
    return (
      <div>
        <h1 className="yeah">The coolest app</h1>
        <PersonIntroduction age={29} />
      </div>
    )
  }
}