const BtnNavDex = (props) => {
    return (
      <div>
  
          <button id='btnAnterior' type="button" class="btn btn-primary">{`< ${props.pokeAnterior}`}</button>
          <button id='btnSiguiente' type="button" class="btn btn-secondary">{`${props.pokeSiguiente} >`}</button>
      </div>
    )
  }
  
  export default BtnNavDex