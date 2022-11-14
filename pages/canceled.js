import PageLoader from 'next/dist/client/page-loader';
import Link from 'next/link';
import React from 'react';
import { BsBagXFill } from 'react-icons/bs';

const Canceled = () => {
    return (
        <div className='success-wrapper'>
            <div className='success'>
                <h2>Commande annulé :(</h2>
                <p className='icon'>
                    <BsBagXFill />
                </p>
                <div>
                    <Link href="/" >
                       <button className='btn' width="300px">
                          Retour au menu
                       </button>
                    </Link>
                </div>
            </div>
        </div>
      )
}

export default Canceled