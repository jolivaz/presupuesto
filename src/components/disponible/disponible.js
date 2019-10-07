import React from 'react'
import { revisarPresupuesto } from '../../helpers';

const Disponible = ({presupuesto,presupuestoInicial}) => {

  return (
    <div className="montos">
        <div className="inicial">
            <h3>Presupuesto  Inicial:</h3>
            <h2>{presupuestoInicial}</h2>
        </div>
        <div>
            <h3>Disponible:</h3>
            <h2 
                className={revisarPresupuesto(presupuestoInicial, presupuesto)}>
                {presupuesto}
            </h2>
        </div>
    </div>
    
  )
}

export default Disponible;