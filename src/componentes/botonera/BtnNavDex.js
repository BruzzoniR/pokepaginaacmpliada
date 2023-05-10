import "./BtnNavDex.css"

const BtnNavDex = (props) => {
    return (
      <div className="d-flex justify-content-center">
  
          <button id='btnAnterior' type="button" className="botonNavPoke col-6 rounded-start">{`< ${props.pokeAnterior}`}</button>
          <button id='btnSiguiente' type="button" className="botonNavPoke col-6 rounded-end">{`${props.pokeSiguiente} >`}</button>
      </div>
    )
  }
  
  export default BtnNavDex