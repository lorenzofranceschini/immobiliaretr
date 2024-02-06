// NuovaPagina.tsx
import React from 'react';

const gest: React.FC = () => {
  return (
    
    <div className="">
      <div className="flex justify-center items-center">
        <img src="/Logo_Sito.png" className="mt-[50px]"/>
      </div>
      <div className='flex justify-evenly mt-[200px] items-center w-full h-[170px]'>
        <div className='border border-stone-600 rounded-[20px] bg-white text-cyan-600 font-bold text-[22px] p-9' >
            <a href="/gestionale">Aggiungi</a>
        </div>
        <div className='border border-stone-600 ml-30px rounded-[20px] bg-white text-cyan-600 font-bold text-[22px] p-9' >
            <a href="/modifica">Modifica</a>
        </div>
        <div className='border border-stone-600 ml-30px rounded-[20px] bg-white text-cyan-600 font-bold text-[22px] p-9' >
            <a href="/rimuovi">Elimina</a>
        </div>
        <div className='border border-stone-600 ml-30px rounded-[20px] bg-white text-cyan-600 font-bold text-[22px] p-9' >
            <a href="/home">Home</a>
        </div>
      </div>
    </div>
  );
};

export default gest;
