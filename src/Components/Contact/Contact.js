import React from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';
import Header from '../Header/Header';
export default function Contact() {

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_9zazoul', 'template_ffxscg4', e.target, 'user_gpnQ6DEdDgD1rNZoTiD8R')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    }

    return (
        <div className="wedding">
            <Header></Header>
            <div>
                <h2 className="pHead">CONNECT WITH ME</h2>
                <form className="contact-form" onSubmit={sendEmail}>
                    <input type="hidden" name="contact_number" />
                    <input className="icontrol" placeholder="Your Name" type="text" name="user_name" /> <br/>
                    <input placeholder="Your Email" className="icontrol" type="email" name="user_email" /> <br/>
                    <textarea placeholder="Your Message" className="icontrol mess" name="message" /> <br/>
                   <button className="button" type="submit">Send Message</button>
                </form>
            </div>
        </div>
    );


}

// import React from 'react';
// import emailjs from 'emailjs-com';

// const Contact = () => {

// const sendEmail = (e) =>{
//     e.preventDefault();

//     emailjs.sendForm('gmail', 'template_ffxscg4', e.target, 'user_gpnQ6DEdDgD1rNZoTiD8R')
//       .then((result) => {
//           console.log(result.text);
//       }, (error) => {
//           console.log(error.text);
//       });



//     return (
//         <form className="contact-form" onSubmit={sendEmail}>
//       <input type="hidden" name="contact_number" />
//       <label>Name</label>
//       <input type="text" name="user_name" />
//       <label>Email</label>
//       <input type="email" name="user_email" />
//       <label>Message</label>
//       <textarea name="message" />
//       <input type="submit" value="Send" />
//     </form>
//     );
// };

// export default Contact;