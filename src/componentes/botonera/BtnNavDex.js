const BtnNavDex = (props) => {
    return (
      <div>
  
          <button id='btnAnterior' type="button" className="btn btn-primary">{`< ${props.pokeAnterior}`}</button>
          <button id='btnSiguiente' type="button" className="btn btn-secondary">{`${props.pokeSiguiente} >`}</button>
      </div>
    )
  }
  
  export default BtnNavDex