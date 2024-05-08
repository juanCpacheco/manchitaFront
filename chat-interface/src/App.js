import logo from "./ClearM.png";
import "./App.css";
import Chatbot from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";
import React, { useEffect, useState } from "react";

import ActionProvider from "./chatbot/ActionProvider";
import config from "./chatbot/config";
import MessageParser from "./chatbot/MessageParser";

function Modal({
    showModal,
    handleClose,
    handleCheckboxChange,
    enableDismissButton,
}) {
    return (
        <div className={`modal-overlay ${showModal ? "show" : "hide"}`}>
            <div className="modal-content">
                <h1>Aclaración Importante</h1>
                <p>
                    Te damos la bienvenida a manchita, el asistente virtual en
                    diseño gráfico del instituto departamental de Bellas Artes.
                    Este recurso ha sido creado exclusivamente para brindar
                    apoyo en el desarrollo de trabajos de grado en la disciplina
                    de Diseño Gráfico. La información proporcionada está
                    diseñada a la medida para facilitar la investigación en el
                    trabajo de grado, la escritura y comprensión de las
                    normativas asociadas a este proceso académico, así como
                    algunos aspectos de bienestar universitario. Actualmente
                    estamos en una fase de prueba. Agradecemos tu participación
                    como usuario Beta, tu retroalimentación nos ayudará a
                    corregir y mejorar cualquier error que pueda surgir.
                    <br></br>
                    <br></br>
                    Entendemos que al iniciar tu interacción estarás de acuerdo
                    con participar en está investigación, por tanto comunicate
                    con trato respetuoso, cordial y no incluyas información
                    personal o sensible en esta interacción. Ten en cuenta que
                    las respuestas pueden tardar un poco debido al tiempo de
                    procesamiento, estamos trabajando para optimizar la
                    velocidad de respuesta. Es posible que encuentres algunas
                    areas en que la información pueda ser afinada o mejorada o
                    incluso desacertada, por lo que te invitamos para consultar
                    las fuentes oficiales para confirmar.
                    <br></br>
                    <br></br>
                    Tu contribución es vital para perfeccionar este asistente,
                    gracias por formar parte de este proceso y ayudarnos a
                    construir una herramienta más efectiva para la comunidad de
                    Bellas Artes. Empezamos ¿Sí o no?
                </p>
                <label>
                    <input type="checkbox" onChange={handleCheckboxChange} /> He
                    leído, entiendo el propósito de este chatbot y estoy de
                    acuerdo con su uso.
                </label>
                <br></br>
                <button
                    className="button-Intro"
                    onClick={handleClose}
                    disabled={!enableDismissButton}
                >
                    ¡Vamos a conversar!
                </button>
            </div>
        </div>
    );
}

function App() {
    const [showModal, setShowModal] = useState(true);
    const [enableDismissButton, setEnableDismissButton] = useState(false);
    useEffect(() => {
        console.log(
            "Inicio del chat con manchita",
            MessageParser.getMessages()
        );
    });
    const handleCloseModal = () => {
        if (!enableDismissButton) {
            alert("Please enable the dismiss button.");
            return;
        }

        setShowModal(false);
    };

    const handleCheckboxChange = (e) => {
        setEnableDismissButton(e.target.checked);
    };
    return (
        <div className="App">
            <Modal
                showModal={showModal}
                handleClose={handleCloseModal}
                handleCheckboxChange={handleCheckboxChange}
                enableDismissButton={enableDismissButton}
            />
            <header className="App-header">
                <div className="LogoSection">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>
                        ¡Bienvenido(a) tu chat con Manchita! En la barra
                        inferior puedes escribir tus preguntas y enviarlas con
                        el botón a su derecha (o con la tecla enter). Manchita
                        te las responderá tal como lo haría una persona real
                        ¡Adelante y a preguntar!
                    </p>
                </div>
            </header>
            <div>
                <Chatbot
                    config={config}
                    className="chatbot"
                    messageParser={MessageParser}
                    actionProvider={ActionProvider}
                    placeholderText="Escríbeme tus preguntas..."
                />
            </div>
            <div className="footerBella">
                <p>
                    ACLARACIÓN: Manchita es un producto de software experimental
                    resultado del trabajo en el proyecto de grado de Kevin Cohen
                    Solano y Juan Camilo Pacheco. Es posible que las respuestas
                    obtenidas por la inteligencia artificial no sean
                    completamente verídicas. Cualquier incoveniente o pregunta
                    comuniquense al correo k.cohen@uniandes.edu.co. Muchas
                    gracias por chatear con Manchita.
                </p>
            </div>
        </div>
    );
}

export default App;
