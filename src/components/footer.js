import React from 'react';
import '../assets/css/footer.css';
import Email from '../assets/images/mail.png';
import Phone from '../assets/images/phone.png';
import Twitter from '../assets/images/twitter.png';
import Facebook from '../assets/images/facebook.png';

export default () => (
    <div className="foot-container">
        <div className="contact">
            <p><img src={Email} alt="Email Icon" /> order@mboutique.com</p> 
            <p><img src={Phone} alt="Phone Icon" /> 949-800-3111</p> 
            <p><img src={Facebook} alt="Facebook Icon" /> <img src={Twitter} alt="Twitter Icon" /> Follow Us</p>
        </div>
        <div className="copyright">
            <p>Copyright &copy; MBoutique. All Rights Reserved.</p>
        </div>
    </div>
)