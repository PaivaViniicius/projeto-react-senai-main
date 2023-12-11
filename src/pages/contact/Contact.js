import EmailForm from "../../components/emailForm/EmailForm";
import './contact.css'
import imgHome from '../../img/imgHome.png';

function Contact(){

    return(
        <div>
            <img className='background-img' src={imgHome}/>
            <h1 className='title'>Contato</h1>
                <EmailForm/>
        </div>
    )

}
export default Contact
