import Emitter from "./EventEmitter"

export default class Store extends Emitter {
  constructor(dispatcher){
    super()
    this.count = 0
    // observe event
    dispatcher.on("countUp", this.onCountUp.bind(this))
    dispatcher.on("countDown", this.onCountDown.bind(this))
  }

  getCount(){
    return this.count
  }

  onCountUp(count) {
    if(this.count === count){
      return
    }
    this.count = count
    this.emit("CHANGE")
  }

  onCountDown(count) {
    if(this.count === count){
      return
    }
    this.count = count
    this.emit("CHANGE")
  }
}