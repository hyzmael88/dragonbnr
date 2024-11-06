// components Cotizar.js
import React from "react";
import Image from "next/image";

const Cotizar = () => {
  return (
    <div className="bg-gradient-to-b from-black to-red-900 text-white py-12 px-6 md:px-12 text-center">
      <h2 className=" text-center text-[#ca1b2e] text-[22.67px] leading-[34px] ">Obtén tu cotización a la medida</h2>
      <div className="w-full flex justify-center items-center">
      <Image src={"/images/logoletra.svg"} quality={100} width={340} height={38} alt="linea" />
      </div>
      <p className="mb-8 text-[10px] md:text-[18px] text-left md:text-center mt-6 lg:max-w-[500px] lg:mx-auto">
        Estamos comprometidos a brindarle un servicio de calidad y a crear una
        presencia en línea que refleje fielmente la esencia de su empresa.
        Agradecemos de antemano su colaboración y estamos emocionados de
        embarcarnos juntos en este viaje.
      </p>

      <form className="space-y-4 max-w-md mx-auto grid grid-cols-2 gap-x-4">
        <input
          type="text"
          placeholder="Nombre"
          className="w-full px-4 py-2 border border-gray-300 rounded-md  bg-transparent text-white text-[7.26px] md:text-[10px]    placeholder:text-center col-span-2"
        />
        <input
          type="email"
          placeholder="Correo"
          className="w-full px-4 py-2 border border-gray-300 rounded-md bg-transparent text-white text-[7.26px] md:text-[10px]    placeholder:text-center col-span-2 md:col-span-1"
        />
        <input
          type="tel"
          placeholder="Teléfono"
          className="w-full px-4 py-2 border border-gray-300 rounded-md bg-transparent text-white text-[7.26px] md:text-[10px]    placeholder:text-center col-span-2 md:col-span-1"
        />
        <input
          type="text"
          placeholder="Servicio"
          className="w-full px-4 py-2 border border-gray-300 rounded-md bg-transparent text-white text-[7.26px] md:text-[10px]    placeholder:text-center "
        />
        <input
          type="text"
          placeholder="Tipo de empresa"
          className="w-full px-4 py-2 border border-gray-300 rounded-md bg-transparent text-white text-[7.26px] md:text-[10px]    placeholder:text-center"
        />
        <textarea
          placeholder="Mensaje"
          className="w-full px-4 py-2 border border-gray-300 rounded-md bg-transparent text-white text-[7.26px] md:text-[10px]    placeholder:text-center h-32 resize-none col-span-2 "
        ></textarea>

        <p className="text-left md:text-center text-[10px] mt-4 col-span-2">
          Al enviar el formato estás aceptando nuestro{" "}
            Aviso de Privacidad, consúltalo 
          <a href="#aviso" className="text-red-500 hover:underline"> {" "} 
          aquí.
          </a>
        </p>

        <button
          type="submit"
          className="bg-red-500 text-white font-bold py-2 px-8 rounded-md hover:bg-red-600 mt-4 col-span-2"
        >
          Enviar
        </button>
      </form>
    </div>
  );
};

export default Cotizar;
