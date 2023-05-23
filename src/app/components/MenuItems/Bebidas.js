import dataJugos from '../../data/menu/bebidas/jugoscoldpress.json'
import dataSmoothies from '../../data/menu/bebidas/smoothies.json'
import dataAguasYRefrescos from '../../data/menu/bebidas/aguasyrefrescos.json'
import dataCafeYTe from '../../data/menu/bebidas/cafeyte.json'
import dataCerveza from '../../data/menu/bebidas/cerveza.json'
import dataVino from '../../data/menu/bebidas/vino.json'

export default function Bebidas() {
    const renderMenuItems = (data) => {
        return Object.values(data).map((item, index) => (
            <div key={item.nombre}>
                <h3 className='menuPlateTitle'>{item.nombre}</h3>
                <p className='menuNormalText'>{item.descripcion} {item.precio}</p>
            </div>
        ));
    };

    const renderMenuItemsInlinePrice = (data) => {
        return Object.values(data).map((item, index) => (
            <div key={item.nombre}>
                <h3 className='menuNormalText'>{item.nombre} {item.precio}</h3>
            </div>
        ));
    };

    return (
        <>
            <div className='mt-5 mb-2'>
                <h2 className='plateSubseccionTitle'>Jugos Cold Press(v)</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {renderMenuItems(Object.values(dataJugos))}
            </div>
            <div className='mt-5 mb-2'>
                <h2 className='plateSubseccionTitle'>Smoothies</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {renderMenuItems(Object.values(dataSmoothies))}
            </div>
            <div className='mt-5 grid grid-cols-1 md:grid-cols-3 gap-8'>
                <div>
                    <h2 className='plateSubseccionTitle'>Aguas y Refrescos</h2>
                    {renderMenuItemsInlinePrice(Object.values(dataAguasYRefrescos))}
                </div>
                <div>
                    <h2 className='plateSubseccionTitle'>Café y Té</h2>
                    {renderMenuItemsInlinePrice(Object.values(dataCafeYTe))}
                    <p className='pt-2 pl-4 text-sm italic'>*con leche vegetal + $15</p>
                </div>
                <div>
                    <h2 className='plateSubseccionTitle'>Cerveza</h2>
                    {renderMenuItemsInlinePrice(Object.values(dataCerveza))}
                </div>
                <div>
                    <h2 className='plateSubseccionTitle'>Vino</h2>
                    {renderMenuItemsInlinePrice(Object.values(dataVino))}
                </div>
            </div>
        </>
    );
}

