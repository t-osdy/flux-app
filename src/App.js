import React from "react"
import ActionCreator from "./ActionCreator"
import Store from "./Store"
import EventEmitter from "./EventEmitter"

const dispatcher = new EventEmitter()
const action = new ActionCreator(dispatcher)
const store = new Store(dispatcher)

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { count: store.getCount() }
    store.on("CHANGE", () => {
      this._onChange()
    })
  } 

  _onChange(){
    this.setState({count: store.getCount()})
  }

  up(){
    action.countUp(this.state.count + 1)
  }

  down(){
    action.countDown(this.state.count - 1)
  }

  render() {
    return (
      <div>
         <button onClick={this.up.bind(this)}>Count Up</button>
         <button onClick={this.down.bind(this)}>Count Up</button>
        <p>
          Count: {this.state.count}
        </p>
      </div>
    )
  }
}