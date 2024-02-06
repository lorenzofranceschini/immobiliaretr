"use client";

import axios from 'axios';
import React, { useState } from 'react';
import FileBase64 from 'react-file-base64'; // Import FileBase64

const Modifica: React.FC = () => {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [bathrooms, setBathrooms] = useState('');
  const [location, setLocation] = useState('');
  const [superficie, setSuperficie] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');
  const [error, setError] = useState('');
  const [locali, setLocali] = useState('');


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem('token');

      await axios.put(`http://localhost:3003/houses/${id}`, {
        image,
        name,
        bathrooms,
        location,
        superficie,
        price,
      }, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setId('');
      setName('');
      setBathrooms('');
      setLocation('');
      setSuperficie('');
      setPrice('');
      setImage('');
      setError('');
    } catch (error) {
      setError('Error updating house');
      console.error('Error updating house:', error);
    }
  };

  const handleImageChange = (imageData: string) => {
    setImage(imageData);
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
            <h2 className="mt-0 text-left text-2xl font-bold leading-9 tracking-tight text-white">Modifica Immobile</h2>
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
                <label className="block text-sm font-medium leading-6 text-white">Nome</label>
                <div className="mt-2">
                  <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Nome" required className="block w-full rounded-md py-1.5 text-gray-900 placeholder:text-gray-400 text-[14px] placeholder:text-[12px]" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium leading-6 text-white">Prezzo dell'immobile</label>
                <div className="mt-2">
                  <input value={price} onChange={(e) => setPrice(e.target.value)} type="text" placeholder="Ex. 10.000" required className="block w-full rounded-md py-1.5 text-gray-900 placeholder:text-gray-400 text-[14px] placeholder:text-[12px]" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium leading-6 text-white">Superficie totale</label>
                <div className="mt-2">
                  <input value={superficie} onChange={(e) => setSuperficie(e.target.value)} type="number" placeholder="Ex. 120" required className="block w-full rounded-md py-1.5 text-gray-900 placeholder:text-gray-400 text-[14px] placeholder:text-[12px]" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium leading-6 text-white">Numero locali</label>
                <div className="mt-2">
                  <input value={locali} onChange={(e) => setLocali(e.target.value)} type="number" placeholder="Ex. 4" required className="block w-full rounded-md py-1.5 text-gray-900 placeholder:text-gray-400 text-[14px] placeholder:text-[12px]" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium leading-6 text-white">Numero di bagni</label>
                <div className="mt-2">
                  <input value={bathrooms} onChange={(e) => setBathrooms(e.target.value)} type="number" placeholder="Ex. 2" required className="block w-full rounded-md py-1.5 text-gray-900 placeholder:text-gray-400 text-[14px] placeholder:text-[12px]" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium leading-6 text-white">Località</label>
                <div className="mt-2">
                  <input value={location} onChange={(e) => setLocation(e.target.value)} type="text" placeholder="Località" required className="block w-full rounded-md py-1.5 text-gray-900 placeholder:text-gray-400 text-[14px] placeholder:text-[12px]" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium leading-6 text-white">Carica Immagine</label>
                <FileBase64 multiple={false} onDone={({ base64 }) => handleImageChange(base64)} />
              </div>

              <div>
                {error && <p className="text-red-500">{error}</p>}
                <button type="submit" className="flex w-full justify-center rounded-md bg-rose-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500">Aggiorna</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modifica;