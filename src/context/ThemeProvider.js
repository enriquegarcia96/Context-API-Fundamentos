import React from 'react'


//--- creo la constante de context, paso 1---//
export const ThemeContext = React.createContext();

const ThemeProvider = ( props ) => {

    //--- creo los valores Globales, paso 2 ---//

    const themes = {
        color: 'red',
        background: '#eee'
    }

    //--- variables globales ---//
    const [ theme, setTheme ] = React.useState(themes);

    React.useEffect( () =>{
        if (localStorage.getItem('themeLocal')) {

            //--- creo el objeto ---//
            const themelocal = JSON.parse(localStorage.getItem('themeLocal'));

            setTheme(themelocal);
        }
    },[])

    const cambioColor = (valor) => {
        setTheme(valor);// valor es un objeto 

        localStorage.setItem('themeLocal', JSON.stringify(valor))
    }



    //--- lo paso a traves de los valores, paso 3 ---//
    return (
        <ThemeContext.Provider value={{ theme, cambioColor }}>
            { props.children }
        </ThemeContext.Provider>
    )
}

export default ThemeProvider
