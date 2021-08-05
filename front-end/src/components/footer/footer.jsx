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
              <h3>Titre</h3>
            </li>
            <li>
              <h3>Titre</h3>
            </li>
            <li>
              <h3>Titre</h3>
            </li>
          </ul>
          <ul>
            <li>test</li>
            <li>test</li>
            <li>test</li>
          </ul>
          <ul>
            <li>test</li>
            <li>test</li>
            <li>test</li>
          </ul>
        </div>
      </footer>
    </div>
  );
}


