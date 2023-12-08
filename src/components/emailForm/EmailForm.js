import './emailForm.css';
import Instagram from "../../img/Instagram.png";
import facebook from "../../img/facebook.png";
import whatsApp from "../../img/whatsApp.png";

function EmailForm() {
    return (
        <div className="email-form-container">  
            <div className="image-gallery">
                <div className="image-container">
                    <img src={Instagram}/>
                    <div className="contact-buttons">
                        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                            <button>Instagram</button>
                        </a>
                    </div>
                </div>
                <div className="image-container">
                    <img src={whatsApp}/>
                    <div className="contact-buttons">
                        <a href="https://api.whatsapp.com/send?phone=48996606563" target="_blank" rel="noopener noreferrer">
                            <button> WhatsApp </button>
                        </a>
                    </div>
                </div>
                <div className="image-container">
                    <img src={facebook}/>
                    <div className="contact-buttons">
                        <a href="https://www.facebook.com/?locale=pt_BR" target="_blank" rel="noopener noreferrer">
                            <button>Facebook</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EmailForm;
