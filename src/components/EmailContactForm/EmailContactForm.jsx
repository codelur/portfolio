import { useState } from "react";
import "./EmailContactForm.css"

import ModalWithForm from "../ModalWithForm/ModalWithForm"

function EmailContactForm({closeModal, isOpen, handleSubmit}){

    const [email, setEmail] = useState("");
    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const [senderName, setSenderName] = useState("");
    const handleSenderNameChange = (event) => {
        setSenderName(event.target.value);
    };

    const [message, setMessage] = useState("");
    const handleMessageChange = (event) => {
        setMessage(event.target.value);
    };

    return(
        <ModalWithForm
            title="Send Email"
            buttonText="Send"
            closeModal={closeModal}
            name="email-contact"
            isOpen={isOpen}
            onSubmit={handleSubmit}
            altButtonText={""}
            modal={"email-contact"}
            >
                <label htmlFor="email" className="modal__label">
                    Email
                    <input
                    type="email"
                    className="modal__input"
                    id="email"
                    name="email"
                    placeholder="Email"
                    onChange={handleEmailChange}
                    value={email}
                    />
                </label>

                <label htmlFor="senderName" className="modal__label">
                    Your Name
                    <input
                    type="text"
                    className="modal__input"
                    id="senderName"
                    name="senderName"
                    placeholder="Your name"
                    onChange={handleSenderNameChange}
                    value={senderName}
                    maxLength="20"
                    />
                </label>
                <label htmlFor="message" className="modal__label">
                    Message
                    <textarea
                        className="modal__input"
                        id="message"
                        name="message"
                        placeholder="Your message here"
                        onChange={handleMessageChange}
                        value={message}
                        maxLength="100"
                        rows="2"
                        />
                </label>

        </ModalWithForm>
    )
}

export default EmailContactForm;