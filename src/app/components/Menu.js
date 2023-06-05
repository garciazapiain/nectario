"use client"; // This is a client component 👈🏽
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
                    <div className="grid grid-cols-2 md:flex m-3 justify-around">
                        <button
                            className={`tabButton ${selectedTab === 'option1' ? 'active' : ''}`}
                            onClick={() => handleTabClick('option1')}
                        >
                            <p>Desayunos</p>
                        </button>
                        <button
                            className={`tabButton ${selectedTab === 'option2' ? 'active' : ''}`}
                            onClick={() => handleTabClick('option2')}
                        >
                            <p>Comida & Cena</p>
                        </button>
                        <button
                            className={`tabButton ${selectedTab === 'option3' ? 'active' : ''}`}
                            onClick={() => handleTabClick('option3')}
                        >
                            <p>Postres</p>
                        </button>
                        <button
                            className={`tabButton ${selectedTab === 'option4' ? 'active' : ''}`}
                            onClick={() => handleTabClick('option4')}
                        >
                            <p>Bebidas</p>
                        </button>
                    </div>
                    <div className="contentContainer m-4">
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
                    <div className='hidden md:flex justify-center m-4'>
                        <p className='m-2'>(o) - Orgánico</p>
                        <p className='m-2'>(v) - Vegetariano</p>
                        <p className='m-2'>(vv) - Vegano</p>
                        <p className='m-2'>(i) - Integral</p>
                        <p className='m-2'>(gf) - Gluten Friendly</p>
                    </div>
                    <div className='md:hidden flex-col mt-8 m-4'>
                        <p className='mb-2'>(o) - Orgánico</p>
                        <p className='mb-2'>(v) - Vegetariano</p>
                        <p className='mb-2'>(vv) - Vegano</p>
                        <p className='mb-2'>(i) - Integral</p>
                        <p>(gf) - Gluten Friendly</p>
                    </div>
                </div>
            </div>
        </main>
    )
}
