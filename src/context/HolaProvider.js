import React from 'react'

export const HolaContext = React.createContext();

const HolaProvider = ( props ) => {

    const hola = 'Hola Desde Un Segundo ejemplo de Context Global';

    return (
        <HolaContext.Provider value={ {hola} }>
            {props.children}
        </HolaContext.Provider>
    )
}

export default HolaProvider
