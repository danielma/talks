import React from "react";
import { render } from "react-dom";
import StaticTyping from './static-typing'

const { pathname } = window.location
const talks = {
  "/static-typing": StaticTyping,
}

class TalkSelector extends React.Component {
  render() {
    return (
      <div>
        <h1>No talk found for {pathname}</h1>
        <h2>Try one of these</h2>

        <ul>
          {Object.keys(talks).map((talkPath) => (
            <li key={talkPath}><a href={talkPath}>{talkPath}</a></li>
          ))}
        </ul>
      </div>
    )
  }
}

const Talk = () => {
  if (talks.hasOwnProperty(pathname)) {
    return talks[pathname]
  }

  return TalkSelector
}()

render(<Talk/>, document.getElementById("root"));
