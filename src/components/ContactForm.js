import React from 'react';

import "./ContactForm.css";

function ContactForm() {
  return (
    <div className="contact">
      <form name="contact" 
            method="post" 
            className='contact_form' 
            data-netlify="true" 
            onSubmit="submit">

            <input type="hidden" name="form-name" value="contact" />
            <input type="text" name="name" placeholder='Votre nom, prénom'/>
          
            <input type="email" name="email" placeholder='Votre email'/>
         
            <textarea name="message" placeholder='Votre message'></textarea>
         
            <button type="submit">Envoyer</button>
         
        </form>
    </div>
  )
}

export default ContactForm
