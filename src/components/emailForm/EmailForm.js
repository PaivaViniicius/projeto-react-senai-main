import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import './emailForm.css'; 

function EmailForm() {
    return (
        <div className="container">
            <form className="formulario" method="post" action="enviaDados.php">
                
                <h2 className="titulo">Formulário de Contato</h2>
                <label className="label">
                    <input type="text" className="input-bordas" placeholder="Nome" required />
                </label>
                <label className="label">
                    <input type="text" className="input-bordas" placeholder="E-mail" required />
                </label>
                <label className="label">
                    <input type="text" className="input-bordas" placeholder="Assunto" required />
                </label>
                <label className="label">
                    <textarea type="text" className="input-bordas-textarea" rows="6" placeholder="Descrição" required />
                </label>
                <div id='info'>
                    <button className="button-form borda-inversa">Enviar</button>
                    <p><FontAwesomeIcon icon={faEnvelope} /> <strong> Email: mariabonita@gmail.com</strong></p>
                    <p><FontAwesomeIcon icon={faPhone} /> <strong> Telefone: (48) 1234-5678</strong></p>
                </div>
            </form>
        </div>
    );
}

export default EmailForm;
