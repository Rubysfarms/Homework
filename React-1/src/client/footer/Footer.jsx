import React from 'react';
import './Footer.css';
export const Footer = () => {
  return (
    <div className="footer">
      <div className="links">
        <a href="https://developer.mozilla.org" className="footerLink">About</a>
        <a href="https://developer.mozilla.org" className="footerLink">Therms of Service</a>
        <a href="https://developer.mozilla.org" className="footerLink">Contact</a>
      </div>
      <div className='footerLogo'>
          <span className='logoBold'>MOVIE</span>
          <span className='logoThin'>RISE</span>
      </div>
      <div className="socials">
        <a href="https://developer.mozilla.org" className="footerSocial" style={{backgroundImage: 'url(./social1.png)'}}></a>
        <a href="https://developer.mozilla.org" className="footerSocial" style={{backgroundImage: 'url(./social2.png)'}}></a>
        <a href="https://developer.mozilla.org" className="footerSocial" style={{backgroundImage: 'url(./social3.png)'}}></a>
        <a href="https://developer.mozilla.org" className="footerSocial" style={{backgroundImage: 'url(./social4.png)'}}></a>
        <a href="https://developer.mozilla.org" className="footerSocial" style={{backgroundImage: 'url(./social5.png)'}}></a>
      </div>
      <div className="copyright">Copyright © 2017 <span className='boldText'>MOVIE</span>RISE. All Rights Reserved.</div>                              
    </div>
  );
}