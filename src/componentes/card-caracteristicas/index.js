import "./Caracteristicas.css"

function Caracteristicas() {
    return <div className="caracteristicas rounded-3">
        <div className='d-flex flex-row p-3'>
            <div className="col-6">
                <h3>Altura</h3>
                <p className="fs-5">0,7m</p>
                <h3>Peso</h3>
                <p className="fs-5">6,9kg</p>
                <h3>Sexo</h3>
                <p className="fs-5">M & F</p>
            </div>
            <div  className="col-6">
                <h3>Categoria</h3>
                <p className="fs-5">Semilla</p>
                <h3>Habilidades</h3>
                <p className="fs-5">Espesura</p>
            </div>
        </div>
    </div>;
}

export default Caracteristicas;