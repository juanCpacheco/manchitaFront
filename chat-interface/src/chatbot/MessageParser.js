class MessageParser {
  constructor(actionProvider, state) {
    this.actionProvider = actionProvider;
    this.state = state;
  }

  parse(message) {
    console.log(message)
    console.log(this.state.messages)
    this.actionProvider.addNewResponseMessage(message);
  
  }

  static getMessages() {
    return this.state;

  }

}


export default MessageParser;