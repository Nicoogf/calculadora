import React, { useState } from 'react' ;
import "./calculadora.css" ;
import Boton from './Boton';

const Calculadora = () => {

    const [ data , setData ] = useState({ operacion:"" , resultado: "" }) ;

    const escritura = (evento) => {

        if(data.operacion.length > 10 ) return
        setData( {...data , operacion: `${data.operacion}`+ `${ evento.target.innerText }`}) ;
    } 

    const borrarNumero = () =>{
            setData( {...data , operacion: data.operacion.slice(0 , data.operacion.length - 1 )}) 
    }

    const limpiar = () =>{
        setData( { operacion:"", resultado:""})
    }

    const resultado = () =>{
        const resultado= eval(data.operacion);
        setData( {...data , resultado} )
    }

  

  return (

    <main>

        <span  className='resultado' > { data.resultado } </span>
        <span  className='display' > { data.operacion } </span>
        
        <Boton texto="C" clase="gris"  handleClick={ limpiar }/>
        <Boton texto="+/-" clase="gris"  />
        <Boton texto="%" clase="gris"  />
        <Boton texto="/" clase="operacion" handleClick={ escritura }/>
        <Boton texto="7" clase="numero" handleClick={ escritura }/>
        <Boton texto="8" clase="numero" handleClick={ escritura }/>
        <Boton texto="9" clase="numero" handleClick={ escritura }/>
        <Boton texto="*" clase="operacion" handleClick={ escritura }/>
        <Boton texto="4" clase="numero" handleClick={ escritura }/>
        <Boton texto="5" clase="numero" handleClick={ escritura }/>
        <Boton texto="6" clase="numero" handleClick={ escritura }/>
        <Boton texto="-" clase="operacion" handleClick={ escritura }/>
        <Boton texto="1" clase="numero" handleClick={ escritura }/>
        <Boton texto="2" clase="numero" handleClick={ escritura }/>
        <Boton texto="3" clase="numero" handleClick={ escritura }/>
        <Boton texto="+" clase="operacion" handleClick={ escritura }/>
        <Boton texto="." clase="numero" handleClick={ escritura }/>
        <Boton texto="0" clase="numero" handleClick={ escritura } />
        <Boton texto="DEL" clase="numero" handleClick={ borrarNumero }/>
        <Boton texto="=" clase="operacion" handleClick={ resultado } />

    </main>

  ) ;
} ;

export default Calculadora ;