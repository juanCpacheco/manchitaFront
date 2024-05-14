class ActionProvider {
    constructor(
        createChatBotMessage,
        setStateFunc,
        createClientMessage,
        stateRef,
        createCustomMessage,
        ...rest
    ) {
        this.createChatBotMessage = createChatBotMessage;
        this.setState = setStateFunc;
        this.createClientMessage = createClientMessage;
        this.stateRef = stateRef;
        this.createCustomMessage = createCustomMessage;

        // Bind the methods to the current instance
        this.setChatbotMessage = this.setChatbotMessage.bind(this);
        this.addNewResponseMessage = this.addNewResponseMessage.bind(this);
    }

    setChatbotMessage(message) {
        this.setState((state) => ({
            ...state,
            messages: [...state.messages, message],
        }));
    }

    addNewResponseMessage(message) {
        // const url = "http://127.0.0.1:5000/answer";
        const url = "https://manchitaback.azurewebsites.net/answer";
        // const url = "https://manchitaback-95f0435b6819.herokuapp.com/answer";
        const req = this.convertToMessages(message);
        const requestOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: req,
        };
        // Send the POST request
        fetch(url, requestOptions)
            .then((response) => response.json())
            .then((data) => {
                console.log(data.result);
                const botMessage = this.createChatBotMessage(data.result); // Use the response data
                this.setChatbotMessage(botMessage);
            })
            .catch((error) => {
                console.log(error);
                const botMessage = this.createChatBotMessage(
                    "Error en el servidor"
                );
                this.setChatbotMessage(botMessage);
            });
    }

    convertToMessages(mes) {
        let answer = [];
        const data = Object.values(this.stateRef.messages);
        for (let i = 0; i < data.length; i++) {
            const message = data[i]["message"];
            const type = data[i]["type"];
            if (type === "user") {
                answer.push({ role: "user", content: message });
            } else if (type === "bot") {
                answer.push({ role: "assistant", content: message });
            }
        }
        answer.push({ role: "user", content: mes });
        return JSON.stringify({ REQUEST: answer });
    }
}

export default ActionProvider;
