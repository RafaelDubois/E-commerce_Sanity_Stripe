import Link from 'next/link';
import React, {useState, useEffect} from 'react';
import {BsBagCheckFill, BsBagXFill} from 'react-icons/bs';

import { useStateContext } from '../context/StateContext';
import { runFireworks } from '../lib/utils';


const Success = () => {
  const { setCartItems, setTotalPrice, setTotalQuantities} = useStateContext();

  useEffect(() => {
    localStorage.clear();
    setCartItems([]);
    setTotalPrice(0);
    setTotalQuantities(0);
    runFireworks();
  }, [])

  return (
    <div className='success-wrapper'>
        <div className='success'>
            <p className='icon'>
                <BsBagCheckFill />
            </p>
            <h2>Merci pour votre achat !</h2>
            <p className='email-msg'>Regarder votre boite de réception pour avoir le recu.</p>
            <p className='description'>
            Si vous avez des questions, envoyer un message à 
            <a href="mailto:rafaeldubois974@gmail.com"> rafaeldubois974@gmail</a>
            </p>
        <Link href="/">
            <button type='button' width="300px" className='btn'>
                Continuer vos achats
            </button>
        </Link>
        </div>
    </div>
  )
};

export default Success;