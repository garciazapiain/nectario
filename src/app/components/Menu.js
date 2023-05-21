"use client"; // This is a client component 👈🏽
import Image from 'next/image'
import sobreNosotros from '../images/sobreNosotros.jpeg'
import { useState } from 'react';
import Desayunos from './MenuItems/Desayunos'
import ComidaCena from './MenuItems/ComidaCena'
import Postres from './MenuItems/Postres'
import Bebidas from './MenuItems/Bebidas'

export default function Menu() {
    const [selectedTab, setSelectedTab] = useState('option1');

    const handleTabClick = (tab) => {
        setSelectedTab(tab);
    };

    return (
        <main id="menu" className=''>
            <div className='menu'>
                <div className='title'>
                    <h1>Menu</h1>
                </div>
                <div className='flex-col self-center items-center justify-center justify-items-center'>
                    <div className="grid grid-cols-2 md:flex p-5 justify-around">
                        <button
                            className={`tabButton ${selectedTab === 'option1' ? 'active' : ''} mx-5`}
                            onClick={() => handleTabClick('option1')}
                        >
                            Desayunos
                        </button>
                        <button
                            className={`tabButton ${selectedTab === 'option2' ? 'active' : ''}`}
                            onClick={() => handleTabClick('option2')}
                        >
                            Comida & Cena
                        </button>
                        <button
                            className={`tabButton ${selectedTab === 'option3' ? 'active' : ''}`}
                            onClick={() => handleTabClick('option3')}
                        >
                            Postres
                        </button>
                        <button
                            className={`tabButton ${selectedTab === 'option4' ? 'active' : ''}`}
                            onClick={() => handleTabClick('option4')}
                        >
                            Bebidas
                        </button>
                    </div>
                    <div className="contentContainer p-5 mx-5">
                        {selectedTab === 'option1' && (
                            <Desayunos />
                        )}
                        {selectedTab === 'option2' && (
                            <ComidaCena />
                        )}
                        {selectedTab === 'option3' && (
                            <Postres />
                        )}
                        {selectedTab === 'option4' && (
                            <Bebidas />
                        )}
                    </div>
                </div>
            </div>
        </main>
    )
}
