import React, { useState } from 'react'
import './contact.css'
import emailjs from 'emailjs-com'


const Contact = () => {

    const [email,setEmail] = useState({
        name : '',
        email : '',
        message : ''
    })
    const [confirmEmail,setConfirmEmail] = useState(false)
            
        
    const sendEmail = (e) => {
        e.preventDefault()
        const template_params = {
            name : `${email.name}`,
            email : `${email.email}`,
            message : `${email.message}`
         }
         const user_id = 'user_BpnnzXxlPJRCvNcpfShOb'
         const service_id = "default_service";
         const template_id = "portfolio";
         emailjs.send(service_id, template_id,template_params,user_id)
         .then((result) => {
            // console.log(result);
            result.status === 200 && setConfirmEmail(true)

        }, (error) => {
            console.log(error.text);
        });
        }  
      
        
        return(
            <div id='contact'>
            <div className='containerTitreContact'>
                <h2 className="sousTitreContact">Contactez moi</h2>
                <div className='titreContact'>
                <h2 >Contact</h2>
                </div>
                
               </div>
               <div className="ligneContact"></div>
               <div className='contactText'>
                    <p>N'hésitez pas à me contacter pour toute question.</p>
                </div>
                   <form id='formulaire' onSubmit={sendEmail}>
                         {/* <input type="hidden" name="contact_number" /> */}
                                        <input name="name" placeholder='Nom' value={email.name} required type='text' onChange={e => setEmail({...email,name : e.target.value})} />
                                        <input  name="email" placeholder='Email' value={email.email} required type="email" onChange={e => setEmail({...email,email : e.target.value })}/>
                            <textarea name="message" placeholder='Votre message' value={email.message} required type='text' onChange={e => setEmail({...email,message : e.target.value})} />
                    <input className={confirmEmail ? 'boutonEmailEnvoyé' :'boutonEmail'} type="submit" value={confirmEmail ?'Envoyé' :'Envoyer'}/>
                </form>
                </div>
                
            )
    }

export default Contact