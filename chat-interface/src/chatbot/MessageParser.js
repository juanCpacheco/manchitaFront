class MessageParser {
    constructor(actionProvider, state) {
        this.actionProvider = actionProvider;
        this.state = state;
    }

    parse(message) {
        const linkRegex = /\[([^\]]+)\]\((https?:\/\/[^\\)]+)\)/g;
        let updatedMessage = message.replace(
            linkRegex,
            '<a href="$2" target="_blank">$1</a>'
        );
        this.actionProvider.addNewResponseMessage(updatedMessage);
    }

    static getMessages() {
        return this.state;
    }
}

export default MessageParser;
