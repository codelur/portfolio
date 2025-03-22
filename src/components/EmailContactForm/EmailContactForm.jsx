import { useState } from "react";
import "./EmailContactForm.css"

import ModalWithForm from "../ModalWithForm/ModalWithForm"
import { sendEmail } from "../../api/api";

function EmailContactForm({closeModal, isOpen}){

    const [statusMessage, setStatusMessage] = useState("");
    const [isVisible, setIsVisible] = useState(false);

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

    // Function to hide the status message after 2 seconds
    const showStatusMessage  = () => {
        setIsVisible(true); 
        setTimeout(() => {
            setIsVisible(false); 
            
        }, 2000); // Hide after 2 seconds
    };

    const sendContactEmail = async (event) =>{
        event.preventDefault();
        if (!senderName || !email || !message) {
            setStatusMessage("Please fill in all fields.");
            showStatusMessage();
            return;
          }
      
          // Call the sendEmail function
        try {  
            const response = await sendEmail(senderName, email, message);
            // Check the response and show the message
            if (response.success) {
                setStatusMessage("Email sent successfully!");
            } else {
                setStatusMessage(`Failed to send email: ${response.error}`);
            }
            
        } catch (error) {
            console.error("Error occurred while sending email:", error);
            setStatusMessage("Error occurred while sending email.");
        }finally{
            showStatusMessage();
        }
    }

    return(
        <ModalWithForm
            title="Send Email"
            buttonText="Send"
            closeModal={closeModal}
            name="email-contact"
            isOpen={isOpen}
            onSubmit={sendContactEmail}
            altButtonText={""}
            modal={"email-contact"}
            >
                {statusMessage && 
                    <div className={`status-message ${isVisible ? "visible" : "hidden"}`}>
                        <p className="email-contact__message">{statusMessage}</p>
                    </div>
                    }
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
                    required
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
                    minLength="2"
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
                        required
                        />
                </label>
                
        </ModalWithForm>
    )
}

export default EmailContactForm;