import React from 'react';

export default function Footer  () {
    return ( 
        <footer className="footer">
            <div className="footer__addr">
              <h1 className="footer__logo">EcoCrypt.org</h1>
                  
              <h2>Contact</h2>
              
              <address>
                Contibute to this open source project!<br/>
                    
                <a className="footer__btn" href="mailto:example@gmail.com">Contribute</a> 
              </address>
            </div>
            
            <ul className="footer__nav">
              <li className="nav__item">
                <h2 className="nav__title">Explore</h2>

                <ul className="nav__ul">
                  <li>
                    <a href="#">About</a>
                  </li>

                  <li>
                    <a href="#">Community</a>
                  </li>
                      
                  <li>
                    <a href="#">Blog</a>
                  </li>
                </ul>
              </li>
              
              <li className="nav__item nav__item--extra">
                <h2 className="nav__title">Api</h2>
                
                <ul className="nav__ul nav__ul--extra">
                  <li>
                    <a href="#">Docs</a>
                  </li>
                  
                  <li>
                    <a href="#">Getting started</a>
                  </li>
                  
                  <li>
                    <a href="#">Support</a>
                  </li>
                  
                  <li>
                    <a href="#">Web</a>
                  </li>
                  
                  <li>
                    <a href="#">Mobile Development</a>
                  </li>
                  
                  <li>
                    <a href="#">Contributors</a>
                  </li>
                </ul>
              </li>
              
              <li className="nav__item">
                <h2 className="nav__title">Legal</h2>
                
                <ul className="nav__ul">
                  <li>
                    <a href="#">Privacy Policy</a>
                  </li>
                  
                  <li>
                    <a href="#">Terms of Use</a>
                  </li>
                  
                  <li>
                    <a href="#">Sitemap</a>
                  </li>
                </ul>
              </li>
            </ul>
            
            <div className="legal">
              <p>&copy; 2021 Something. All rights reserved.</p>
              
              <div className="legal__links">
                <span>Made with <span className="heart">♥</span> remotely from Anywhere</span>
              </div>
            </div>
          </footer> 
    )
}