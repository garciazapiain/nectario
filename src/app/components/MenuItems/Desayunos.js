import desayuno from '../../images/menu/desayuno.png'
import Image from 'next/image'
import dataPrincipales from '../../data/menu/desayunos/desayunosprincipales.json'
import dataOmelettes from '../../data/menu/desayunos/omelettes.json';
import React from 'react';

export default function Desayunos() {
    const indexDeImagenAvoToast = 4;

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
            <p className='mb-5 menuNormalText italic'>hasta la 1 PM</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {renderMenuItems(dataPrincipales).map((item, index) => {
                    if (index === indexDeImagenAvoToast) {
                        return (
                            <React.Fragment key="imageFragment">
                                <div>
                                    <Image src={desayuno} alt="dibujo de desayuno Avo Toast" width={200} height={200} />
                                </div>
                                {item}
                            </React.Fragment>
                        );
                    }
                    return item;
                })}
            </div>
            <div className='mt-5 mb-2'>
                <h2 className='plateSubseccionTitle'>Omelette</h2>
                <p className='menuNormalText'>De claras de huevo o huevo entero orgánico. Acompañado de hortalizas guisadas y frijoles</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {renderMenuItems(Object.values(dataOmelettes))}
            </div>
        </>
    );
}
