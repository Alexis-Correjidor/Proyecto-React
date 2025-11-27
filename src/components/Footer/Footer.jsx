import React from "react";
import "./Footer.css";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          
          <p>Horneando calidad desde 2024.</p>
        </div>

        <div className="footer-social">
          <p>Seguinos:</p>
          <div className="icons">
            <a href="#" aria-label="Instagram">📷</a>
            <a href="#" aria-label="Facebook">📘</a>
            <a href="#" aria-label="WhatsApp">💬</a>
          </div>
        </div>
      </div>

      <div className="footer-copy">
        <p>© {new Date().getFullYear()} Belu — Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};
