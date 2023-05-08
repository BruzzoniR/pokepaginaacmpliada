import "./Caracteristicas.css"

function Caracteristicas() {
    return <div className="caracteristicas border rounded">
        <div className='d-flex p-4 justify-content-evenly'>
            <div>
                <h3>Altura</h3>
                <p className="fs-4">0,7m</p>
                <h3>Peso</h3>
                <p className="fs-4">6,9kg</p>
                <h3>Sexo</h3>
                <p className="fs-4">M & F</p>
            </div>
            <div>
                <h3>Categoria</h3>
                <p className="fs-4">Semilla</p>
                <h3>Habilidades</h3>
                <p className="fs-4">Espesura</p>
            </div>
        </div>
    </div>;
}

export default Caracteristicas;