class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }

  greet(){
    const greetingMessage = this.createChatBotMessage('Hi, Friend!')
    this.updateChatBotState(greetingMessage)
  }

  updateChatBotState(message){
    //NOTE: This function is set in the constructor and is passed in
    //from the top level chatbot component the setState function here
    //actually manipulates the top level state of the chatbot so its
    //important that we make sure that we preserve the previous state
    this.setState(prevState => ({
      ...prevState, messages: [...prevState.messages, message]
    }))
  }

}

export default ActionProvider;

