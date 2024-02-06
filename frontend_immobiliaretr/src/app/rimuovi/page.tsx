"use client";

import axios from 'axios';
import React, { useState } from 'react';

const Rimuovi: React.FC = () => {
  const [id, setId] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem('token');

      await axios.delete(`http://localhost:3003/houses/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      // Clear form field
      setId('');
      setError('');
    } catch (error) {
      setError('Error deleting house');
      console.error('Error deleting house:', error);
    }
  };

  return (
    <div className="w-full h-screen bg-white">
      <div className="h-full w-full bg-cyan-800">
        <div className='w-[100px] text-center border border-stone-600 rounded-[8px] bg-white text-cyan-600 shadow-[10px] text-[14px] p-2'>
          <a href="/gest">Indietro</a>
        </div>
        <div className="flex justify-center items-center">
          <img src="/Logo_Sito.png" className="mt-[50px]"/>
        </div>
        <div className="flex min-h-full flex-col justify-start px-2 py-20 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className="mt-0 text-left text-2xl font-bold leading-9 tracking-tight text-white">Rimuovi Immobile</h2>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium leading-6 text-white">ID</label>
                <div className="mt-2">
                  <input value={id} onChange={(e) => setId(e.target.value)} type="text" placeholder="ID" required className="block w-full rounded-md py-1.5 text-gray-900 placeholder:text-gray-400 text-[14px] placeholder:text-[12px]" />
                </div>
              </div>

              <div>
                {error && <p className="text-red-500">{error}</p>}
                <button type="submit" className="flex w-full justify-center rounded-md bg-red-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-600">Rimuovi</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rimuovi;
