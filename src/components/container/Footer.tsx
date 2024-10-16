import React from "react";

const Footer = () => {
  return (
    <div
      className={`absolute w-screen flex bg-[#2C3E50] text-[#ECF0F1] items-center justify-center py-4 unselectable`}
    >
      <div className="text-center p-2">
        Como participante do Programa de Associados da Amazon, sou remunerado
        pelas compras qualificadas efetuadas
      </div>
      <p className='text-center hover:text-gray-500'>Designed by <a href='https://github.com/pedrocnadais' target='_blank'>Pedro Corsi</a></p>
    </div>
  );
};

export default Footer;
