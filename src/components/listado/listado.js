import React from 'react'
import Gasto from '../gasto/gasto.js';

const Listado = ({
    presupuesto,
    guardarPresupuesto,
    listaGastos, 
    guardarListaGastos}) => {

    const eliminarGasto = id => {
        let newLista = [];
        let newPresupesto = 0;
        listaGastos.forEach(gasto => {
            if(gasto.id !== id){
                newLista.push(gasto);
            } else {
                newPresupesto = presupuesto + gasto.montoGasto;
            }
        });
        guardarPresupuesto(newPresupesto);
        guardarListaGastos(newLista);

    }

    return (
        <div className="listado-gastos">
            <h2>Listado de gastos</h2>
            {
                listaGastos.length ?
                listaGastos.map(gasto => (
                    <Gasto 
                        key= {gasto.id}
                        gasto={gasto}
                        eliminarGasto={eliminarGasto} 
                    />
                )) :
                <div className="sin-gastos">
                    <p>No se tienen gastos</p>
                </div>
            }
        </div>
        
    )
}

export default Listado;