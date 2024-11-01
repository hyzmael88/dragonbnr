// components/Footer.js
import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 px-4 text-center">
      <div className="max-w-screen-lg mx-auto">
        <Image
          src="/images/logo.png" // Reemplaza con la ruta de tu logo
          width={150}
          height={150}
          quality={100}
          alt="Dragon Black & Red"
          className="mx-auto mb-4"
        />
        <p className="font-bold text-xl">Dragon Black & Red</p>
        <p className="text-sm italic">Seguridad privada al límite S.A. de C.V.</p>
        <nav className="mt-6 mb-8 space-y-2">
          <a href="#inicio" className="block hover:underline">Inicio</a>
          <a href="#conocenos" className="block hover:underline">Conócenos</a>
          <div className="ml-4">
            <a href="#quienes-somos" className="block hover:underline">¿Quiénes somos?</a>
            <a href="#mision" className="block hover:underline">Misión</a>
            <a href="#vision" className="block hover:underline">Visión</a>
            <a href="#valores" className="block hover:underline">Valores</a>
          </div>
          <a href="#servicios" className="block hover:underline">Servicios</a>
          <div className="ml-4">
            <a href="#guardias" className="block hover:underline">Guardias intramuros</a>
            <a href="#dispositivos" className="block hover:underline">Dispositivos electrónicos</a>
          </div>
          <a href="#certificaciones" className="block hover:underline">Certificaciones</a>
          <a href="#contactanos" className="block hover:underline">Contáctanos</a>
        </nav>
        
        <address className="text-sm mb-6">
          Soria 14 - Segundo Piso, Oficina 302 B, <br />
          Colonia Álamos, Benito Juárez, 03400, CDMX.
        </address>
        
        <a href="mailto:dragonblackandredsegprivada@hotmail.com" className="block text-red-500 mb-4 hover:underline">dragonblackandredsegprivada@hotmail.com</a>
        
        <p className="text-sm mb-4">
          Teléfonos oficina:<br />
          55 9372 2345<br />
          55 9372 3664<br />
          55 9429 0611<br />
          55 9429 0624
        </p>
        
        <p className="text-sm mb-4">WhatsApp: 55 2726 3187</p>
        
        <p className="text-sm mb-8">Horario de atención: Lunes a Viernes de 9:00 a 18:00 hrs.</p>
        
        <div className="flex justify-center space-x-4 mb-6">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebookF className="text-xl hover:text-gray-400" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-xl hover:text-gray-400" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn className="text-xl hover:text-gray-400" />
          </a>
        </div>
        
        <p className="text-xs mb-2">Dragon Black & Red S.A. de C.V. - México, 2024</p>
        <a href="#aviso" className="text-xs hover:underline">Aviso de Privacidad</a>
        
        <p className="text-xs mt-4">Sitio desarrollado por <a href="https://jazimora.com" target="_blank" rel="noopener noreferrer" className="hover:underline">Jazimora Digital Media</a></p>
      </div>
    </footer>
  );
};

export default Footer;
