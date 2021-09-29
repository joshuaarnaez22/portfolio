import { useState } from "react"
import "./contact.scss"
function Contact() {
    const [message, setMessage] = useState(false)
    const handleSubmit = (e) => {
        e.preventDefault()
        setMessage(true)
    }
    return (
        <div className="contact" id="contact">
           <div className="left">
               <img src="assets/shake.svg" alt="" />
           </div>
           <div className="right">
               <h2>Contact</h2>
               <form onSubmit={handleSubmit}>
                   <input type="text" placeholder="Name" required/>
                   <input type="email" placeholder="Email" required/>
                   <input type="text" placeholder="CONTACT NO" required/>
                   <textarea placeholder="Message" required>
                   </textarea>
                   <button type="submit">Send</button>
               </form>
               {message && <span>Thank's Ill reply ASAP! :)</span>}

           </div>
        </div>
    )
}

export default Contact
