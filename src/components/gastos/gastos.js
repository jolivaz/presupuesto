import React, { useState } from 'react'
import Error from '../error/error';
import shorid from 'shortid';

const Gastos = (props) => {

    const {guardarNuevoGasto, guardarCrearGasto} = props;

    const [motivoGasto, guardarMotivoGasto] = useState('');
    const [montoGasto, guardarMontoGasto] = useState(0);
    const [error, guardarError] = useState(false);

    const agregarGasto = e => {
        e.preventDefault();

        if (montoGasto < 1 || isNaN(montoGasto) || motivoGasto === ''){
            guardarError(true);
            return;
        } else {
            const gasto = {
                motivoGasto,
                montoGasto,
                id: shorid.generate()
            }

            guardarNuevoGasto(gasto);
            guardarCrearGasto(true);
            guardarError(false);
            guardarMotivoGasto('');
            guardarMontoGasto(0);
        }
    }


  return (
    <div className="formulario-crear">
        <h2>Agregar gasto</h2>
        <form onSubmit= {agregarGasto}>
            <input 
                type="text" 
                value = 'monto'
                value={motivoGasto}
                className="u-full-width"
                placeholder="Agregar motivo"
                onChange={e => guardarMotivoGasto(e.target.value)}
            />
            <input 
                type="number" 
                value={montoGasto}
                className="u-full-width"
                placeholder="Agregar valor del gasto"
                onChange={e => guardarMontoGasto(parseInt(e.target.value))}
            />
            <input 
                type="submit"
                className="button-primary u-full-width" value="Agregar gasto"
            />
        </form>
        {
            error ?
            <Error mensaje='El campo motivo y valor son requeridos'/>
            : null
        }
    </div>
  )
}

export default Gastos;