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
                <div className='menutitle'>
                    <h1>Menu</h1>
                </div>
                <div className='flex-col self-center items-center justify-center justify-items-center'>
                    <div className="grid grid-cols-2 md:flex p-3 justify-around">
                        <button
                            className={`tabButton ${selectedTab === 'option1' ? 'active' : ''}`}
                            onClick={() => handleTabClick('option1')}
                        >
                            <p>Desayunos</p><p className='text-xs'>hasta la 1 PM</p>
                        </button>
                        <button
                            className={`tabButton ${selectedTab === 'option2' ? 'active' : ''}`}
                            onClick={() => handleTabClick('option2')}
                        >
                            <p>Comida & Cena</p><p className='text-xs'>a partir de la 1 PM</p>
                        </button>
                        <button
                            className={`tabButton ${selectedTab === 'option3' ? 'active' : ''}`}
                            onClick={() => handleTabClick('option3')}
                        >
                            <p className='m-2'>Postres</p>
                        </button>
                        <button
                            className={`tabButton ${selectedTab === 'option4' ? 'active' : ''} h-15`}
                            onClick={() => handleTabClick('option4')}
                        >
                            <p className='m-2'>Bebidas</p>
                        </button>
                    </div>
                    <div className='hidden md:flex justify-center'>
                        <p className='m-2'>(o) - Orgánico</p>
                        <p className='m-2'>(v) - Vegetariano</p>
                        <p className='m-2'>(vv) - Vegano</p>
                        <p className='m-2'>(i) - Integral</p>
                        <p className='m-2'>(gf) - Gluten Friendly</p>
                    </div>
                    <div className='md:hidden flex-col'>
                        <div className='flex justify-center'>
                            <p className='m-2'>(o) - Orgánico</p>
                            <p className='m-2'>(v) - Vegetariano</p>
                            <p className='m-2'>(vv) - Vegano</p>
                        </div>
                        <div className='flex justify-center'>
                            <p className='m-2'>(i) - Integral</p>
                            <p className='m-2'>(gf) - Gluten Friendly</p>
                        </div>
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
