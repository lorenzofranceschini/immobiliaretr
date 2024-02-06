// NuovaPagina.tsx
import React from 'react';

const gest: React.FC = () => {
  return (
    
    <div className="w-full h-screen bg-white ">
      <div className="h-full w-full bg-cyan-800">
      <div className="flex justify-center items-center">
        <img src="/Logo_Sito.png" className="mt-[50px]"/>
      </div>
      <div className='flex justify-evenly mt-[200px] items-center w-full h-[170px]'>
        <div className='border border-stone-600 rounded-[20px] bg-white text-cyan-600 shadow-[10px] font-bold text-[22px] p-9' >
            <a href="/gestionale">Aggiungi</a>
        </div>
        <div className='border border-stone-600 ml-30px rounded-[20px] bg-white text-cyan-600 shadow-[10px] font-bold text-[22px] p-9' >
            <a href="/modifica">Modifica</a>
        </div>
        <div className='border border-stone-600 ml-30px rounded-[20px] bg-white text-cyan-600 shadow-[10px] font-bold text-[22px] p-9' >
            <a href="/rimuovi">Elimina</a>
        </div>
      </div>
      
      </div>
    </div>
  );
};

export default gest;
