import React from "react";
import "./footer.scss";

export default function Footer() {
  return (
    <div>
      <footer>
        <div className="container-footer">
          <div className="footerLogo">
            <img src="/images/logo-white.png" alt="logo" />
            <h1 className="logoName">Groupomania</h1>
          </div>
          <ul>
            <li>
              <h3>Société</h3>
              <li>
                <span>À propos</span>
              </li>
              <li>
                <span>Actualités</span>
              </li>
              <li>
                <span>Carrières</span>
              </li>
            </li>
            <li>
              <h3>
                <span>Mentions légales</span>
              </h3>
              <li>
                <span>Page légale</span>
              </li>
              <li>
                <span>Plan du site</span>
              </li>
            </li>
            <li>
              <h3>Politique de confidentialité</h3>
              <li>
                <span>Politique de Cookies</span>
              </li>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}
