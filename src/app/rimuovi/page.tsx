// NuovaPagina.tsx
import React from 'react';

const rimuovi: React.FC = () => {
  return (
    
    <div className="w-full h-screen bg-white ">
      <div className="h-full w-full bg-cyan-800 ">
        <div className='w-[100px] text-center border border-stone-600 rounded-[8px] bg-white text-cyan-600 shadow-[10px] text-[14px] p-2'>
          <a href="/gest">Indietro</a>
        </div>
      <div className="flex justify-center items-center">
        <img src="/Logo_Sito.png" className="mt-[50px]"/>
      </div>
      </div>
    </div>
  );
};

export default rimuovi;
