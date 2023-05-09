import './App.css';
import BtnNavDex from './componentes/botonera/BtnNavDex';
import Caracteristicas from './componentes/card-caracteristicas';
import Tipos from './componentes/tipos/Tipos';

function App() {
  return (
    <>
    {/* inicio contenedor padre */}
      <div className='container p-4'> 
  
        <div className='text-center'>
          <BtnNavDex pokeAnterior='#0001 Bulbasaur' pokeSiguiente='#0002 Ivysaur' />
        </div>

        <h1 className='text-center'>Bulbasaur <span className='text-secondary'>#0001</span></h1>

        <div className='d-flex flex-column'>
         
          <div className='row'>

            <div className='col-md-6 rounded-2 d-flex justify-content-center' style={{backgroundColor: "#F2F2F2"}}>

              <img src='https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png' alt="imagen pokemon" style={{maxHeight: "350px", maxWidth: "100%"}} />
          
            </div>
            
            <div className='col-md-6'>
              <p>Este Pokémon nace con una semilla en el lomo, que brota con el paso del tiempo.</p>
              <p>Version: 1 | 2</p>
              <Caracteristicas />
            </div>

          </div>

        
          <div className='d-flex flex-md-row flex-column'>

            {/* Inicio Estadisticas */}
              
            <div className='col-md-6 rounded-3 mt-4' style={{backgroundColor: "#A4A4A4"}}>

              <h2 className='p-3 fs-5 fw-light'>Estadisticas</h2>

              <div className='p-3 pt-0 row g-0'>
                <span className='pe-2 fw-bold'>PS</span>
                <progress value="3" max="15" className=''/>
                <span className='pe-2 fw-bold'>Ataque</span>
                <progress value="3" max="15" className=''/>
                <span className='pe-2 fw-bold'>Defensa</span>
                <progress value="3" max="15" className=''/>
                <span className='pe-2 fw-bold'>Ataque Especial</span>
                <progress value="4" max="15" className=''/>
                <span className='pe-2 fw-bold'>Defensa Especial</span>
                <progress value="4" max="15" className=''/>
                <span className='pe-2 fw-bold'>Velocidad</span>
                <progress value="3" max="15" className=''/>
              </div>
            </div>
          
            {/* Fin Estadisticas */}

            {/* Inicio Tipos */}
            <div className='col-md-6 p-3'>
              <h2>Tipos</h2>
              <div className='mt-3 d-flex'>
                <Tipos tipo="grass"/>
                <Tipos tipo="poison"/>
              </div>
              <h2 className='mt-3'>Debilidades</h2>
              <div className='mt-3 d-flex flex-wrap'>
                <Tipos tipo="fire"/>
                <Tipos tipo="psychic"/>
                <Tipos tipo="flying"/>
                <Tipos tipo="ice"/>
              </div>
            </div>
          </div>
        </div>

        

      </div> 
      {/* fin contenedor padre */}
        
    </>

  );
}

export default App;
