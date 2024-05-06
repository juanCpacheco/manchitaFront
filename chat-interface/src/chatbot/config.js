import { createChatBotMessage } from "react-chatbot-kit";
import BotAvatar from "./components/BotAvatar/BotAvatar.jsx";
import background from "./components/Background.png";

const config = {
    botName: "Manchita",
    initialMessages: [
        createChatBotMessage(
            `Hola, soy Manchita. ¿Sobre qué temas te gustaría realizar preguntas? Puedes elegir entre:\n\n1. Proyecto de Grado en Bellas Artes\n2. Diseño Gráfico en Bellas Artes \n\nPor favor, ingresa el número correspondiente al tema que te interesa.`
        ),
    ],
    state: {
        updated: false,
    },
    customComponents: {
        botAvatar: (props) => <BotAvatar {...props} />,
        header: () => (
            <div style={{ padding: "5px" }}>
                <img
                    style={{ width: "100%", height: "auto", maxHeight: "50px" }}
                    src={background}
                    alt="Background"
                />
            </div>
        ),
    },
};

export default config;
