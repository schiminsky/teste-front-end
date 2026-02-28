import './Footer.scss';

import logoFooter from '../../assets/images/econverse-footer.png';
import instagramIcon from '../../assets/images/instagram.png';
import facebookIcon from '../../assets/images/facebook.png';
import linkedinIcon from '../../assets/images/linkedin.png';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-main">
        <div className="footer-brand">
          <img src={logoFooter} alt="Econverse" className="footer-logo" />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <div className="social-icons">
            <img src={instagramIcon} alt="Instagram" />
            <img src={facebookIcon} alt="Facebook" />
            <img src={linkedinIcon} alt="Linkedin" />
          </div>
        </div>

        <div className="footer-links">
          <div className="link-column">
            <h3>Institucional</h3>
            <ul>
              <li>Sobre Nós</li>
              <li>Movimento</li>
              <li>Trabalhe conosco</li>
            </ul>
          </div>
          <div className="link-column">
            <h3>Ajuda</h3>
            <ul>
              <li>Suporte</li>
              <li>Fale Conosco</li>
              <li>Perguntas Frequentes</li>
            </ul>
          </div>
          <div className="link-column">
            <h3>Termos</h3>
            <ul>
              <li>Termos e Condições</li>
              <li>Política de Privacidade</li>
              <li>Troca e Devolução</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </footer>
  );
};

export default Footer;