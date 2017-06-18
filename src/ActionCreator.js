export default class ActionCreator {
  constructor(dispatcher) {
    this.dispatcher = dispatcher
  }

  countUp(data) {
    this.dispatcher.emit("countUp", data);
  }

  countDown(data) {
    this.dispatcher.emit("countDown", data);
  }
}
