import React from 'react'
import { ThemeContext } from '../context/ThemeProvider'
import { HolaContext } from '../context/HolaProvider';

const Principal = () => {

    const { theme }  = React.useContext(ThemeContext);
    const { hola } = React.useContext(HolaContext);
    console.log(hola)

    return (
        <div
            style={
                {
                    background: theme.background, 
                    color: theme.color,
                    width: 350
                }
            }
        >
            <h1>Enrique S. García</h1>
            <p>{hola}</p>
        </div>
    )
}

export default Principal
