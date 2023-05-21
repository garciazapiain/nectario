import Image from 'next/image'
import sopa from '../../images/sopa.png'
import pizza from '../../images/pizza.png'
import noodles from '../../images/noodles.png'
import dataEntradas from '../../data/menu/comidaycena/entradas.json'
import dataSopas from '../../data/menu/comidaycena/sopas.json'
import dataEnsaladas from '../../data/menu/comidaycena/ensaladas.json'
import dataPlatosFuertes from '../../data/menu/comidaycena/platosfuertes.json'
import dataSandwichesYHamburguesas from '../../data/menu/comidaycena/sandwichesyhamburguesas.json'
import React from 'react';

export default function ComidaCena() {
    const indexDeImagenSopa = 2;
    const indexDeImagenPizza = 3;
    const indexDeImagenNoodle = 9;

    const renderMenuItems = (data) => {
        return Object.values(data).map((item, index) => (
            <div key={item.nombre}>
                <h3 className='menuPlateTitle'>{item.nombre}</h3>
                <p className='menuNormalText'>{item.descripcion} {item.precio}</p>
                {item.extras ?
                    <div className='mt-2'>
                        {renderExtras(item.extras)}
                    </div>
                    : null
                }
            </div>
        ));
    };

    const renderExtras = (extras) => {
        return Object.values(extras).map((extra, index) => (
            <p key={index} className='menuNormalText'>{extra}</p>
        ));
    };

    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {renderMenuItems(Object.values(dataEntradas))}
            </div>
            <div className='mt-5 mb-2'>
                <h2 className='plateSubseccionTitle'>Sopas</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {renderMenuItems(dataSopas).map((item, index) => {
                    if (index === indexDeImagenSopa) {
                        return (
                            <React.Fragment key="imageFragment">
                                <div className="md:hidden">
                                    <Image src={sopa} alt="Dibujo de sopa" width={200} height={200} />
                                </div>
                                {item}
                            </React.Fragment>
                        );
                    }
                    return item;
                })}
            </div>
            <div className='mt-5 mb-2'>
                <h2 className='plateSubseccionTitle'>Ensaladas</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {renderMenuItems(Object.values(dataEnsaladas))}
            </div>
            <div className='mt-5 mb-2'>
                <h2 className='plateSubseccionTitle'>Platos Fuertes</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {renderMenuItems(dataPlatosFuertes).map((item, index) => {
                    if (index === indexDeImagenPizza) {
                        return (
                            <React.Fragment key="imageFragment">
                                <div>
                                    <Image src={pizza} alt="Dibujo de pizza" width={200} height={200} />
                                    <p className='pt-2 pl-4 text-sm italic'>*Todas nuestras pizzas las elaboramos con harina integral.</p>
                                </div>
                                {item}
                            </React.Fragment>
                        );
                    }
                    if (index === indexDeImagenNoodle) {
                        return (
                            <React.Fragment key="imageFragment">
                                <div>
                                    <Image src={noodles} alt="Dibujo de noodles" width={200} height={200} />
                                </div>
                                {item}
                            </React.Fragment>
                        );
                    }
                    return item;
                })}
            </div>
            <div className='mt-5 mb-2'>
                <h2 className='plateSubseccionTitle'>Sandwiches & Hamburguesas</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {renderMenuItems(Object.values(dataSandwichesYHamburguesas))}
            </div>
        </>
    );
}
