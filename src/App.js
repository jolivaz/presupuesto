import React, { Fragment, useState, useEffect } from 'react'
import Disponible from './components/disponible/disponible';
import Questions from './components/questions/questions';
import Listado from './components/listado/listado';
import Header from './components/header/header';
import Gastos from './components/gastos/gastos';
import Error from './components/error/error';
import './App.css';

function App() {
  const [presupuestoInicial, guardarPresupuestoInicial] = useState(0);
  const [nuevoGasto, guardarNuevoGasto] = useState({});
  const [presupuesto, guardarPresupuesto] = useState(0);
  const [listaGastos, guardarListaGastos] = useState([]);
  const [errorMonto, guardarErrorMonto] = useState(false);
  const [crearGasto, guardarCrearGasto ] = useState(false);
  const [pasarPresupuesto, guardarPasarPresupuesto] = useState(true);

  useEffect(() => {

    if(crearGasto) {
      if (presupuesto >= nuevoGasto.montoGasto) {
        const listadoNew = [...listaGastos, nuevoGasto];
        const newPresupesto = presupuesto - nuevoGasto.montoGasto;
        guardarErrorMonto(false);
        guardarCrearGasto(false);
        guardarListaGastos(listadoNew);
        guardarPresupuesto(newPresupesto);
      } else {
        guardarErrorMonto(true);
      }
    }

  }, [crearGasto, listaGastos, nuevoGasto]);


  return (
    <Fragment>
      <Header title='Presupuesto mensual'/>
      {
        pasarPresupuesto ?
          <Questions 
            guardarPresupuesto={guardarPresupuesto} 
            guardarPasarPresupuesto={guardarPasarPresupuesto}
            guardarPresupuestoInicial={guardarPresupuestoInicial}
          />
        :
        <div className="formulario-gastos">
          <div className="disponible">
          <Disponible      
            presupuesto={presupuesto} 
            presupuestoInicial={presupuestoInicial}
          />
          {
            errorMonto ? 
              <Error 
              mensaje="Monto de presupuesto no es suficiente" 
            />
            : null
          }
          </div>

          <Gastos 
            guardarNuevoGasto={guardarNuevoGasto}
            guardarCrearGasto={guardarCrearGasto}
          />
          <Listado 
            presupuesto={presupuesto}
            listaGastos={listaGastos}
            guardarListaGastos={guardarListaGastos}
            guardarPresupuesto={guardarPresupuesto}
          />  
        </div>
      }
    </Fragment>
  )
}

export default App;