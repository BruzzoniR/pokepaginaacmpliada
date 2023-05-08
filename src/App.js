import './App.css';
import BtnNavDex from './componentes/botonera/BtnNavDex';
import Caracteristicas from './componentes/card-caracteristicas';

function App() {
  return (
    <div className="App">
      <div className='d-flex justify-content-center'>
        <BtnNavDex pokeAnterior='#0001 Bulbasaur' pokeSiguiente='#0002 Ivysaur' />
      </div>
      <div className='container' /*contenedor padre*/>
        <div className='nombre-id'>
          <h2>name</h2>
          <h2>id</h2>
        </div>
        <div className='d-flex row'>
          <img src='https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png' alt="imagen pokemon" className='col-md-6' />
          <div className='row col-md-6'>
            <p>Este Pokémon nace con una semilla en el lomo, que brota con el paso del tiempo.</p>
            <Caracteristicas />
          </div>

        </div>


        
      </div>
      </div>

  );
}

export default App;
