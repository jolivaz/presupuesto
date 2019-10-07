import React, { Fragment, useState } from 'react';
import Error from '../error/error';
function Questions(props) {

    const { 
        guardarPresupuesto,
        guardarPasarPresupuesto,
        guardarPresupuestoInicial } = props;
    
    const [cantidad, guardarCantidad] = useState(0);
    const [error, guardarError] = useState(false)

    const agregarPresupuesto = e => {
        e.preventDefault();

        if (cantidad < 1 || isNaN(cantidad)){
            guardarError(true);
            return;
        } else {
            guardarPresupuesto(cantidad);
            guardarPresupuestoInicial(cantidad);
            guardarError(false);
            guardarPasarPresupuesto(false)
        }
    }

    return (
        <Fragment>
            <h2>Ingresar presupuesto</h2>
            <form 
                onSubmit= {agregarPresupuesto}
                className="formulario-presupuesto"
            >
                <input 
                    type="number" 
                    className="u-full-width"
                    placeholder="Agrega tu presupesto"
                    onChange={e => guardarCantidad(parseInt(e.target.value))}
                    value = {cantidad}
                />
                <input 
                    type="submit"
                    className="button-primary u-full-width" value="Definir prespuesto"
                />
            </form>
            {
                error ?
                <Error mensaje='El valor ingresado es incorrecto'/>
                : null
            }
        </Fragment>
    )
}

export default Questions;