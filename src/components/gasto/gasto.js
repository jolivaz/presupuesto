import React from 'react'

const Gasto = ({gasto,eliminarGasto}) => {

  return (
    <div className="elemento-gasto">
        <h6>{gasto.motivoGasto}</h6>
        <p>{gasto.montoGasto}</p>
        <i 
            onClick={() => eliminarGasto(gasto.id)}
            className="fas fa-times"> 
        </i>
    </div>
    
  )
}

export default Gasto;