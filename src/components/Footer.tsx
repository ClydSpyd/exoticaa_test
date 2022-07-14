import React from "react";
import logo from "../assets/logo_main.svg";

const Footer: React.FC = () => {
  return (
    <div className="footerContainer">
      <div className="logoContainer">
        <img className="footerLogo" src={logo} alt="Exoticaa logo" />
      </div>
      <p>Copyright 2013-2022 Exoticca. Todos los derechos reservados.</p>
      <p>
        Rambla de Catalunya, 2-4, 5ª planta, 08007 Barcelona, España | EE.UU: 80
        Southwest 8th Street Brickell Bayview, Miami, FL 33130, United States
      </p>
    </div>
  );
};

export default Footer;
