import dataPostres from '../../data/menu/postres/postres.json'

export default function Postres() {
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
                {renderMenuItems(Object.values(dataPostres))}
            </div>
        </>
    );
}
