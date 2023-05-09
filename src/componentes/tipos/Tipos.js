import "./Tipos.css";


const Tipos = (props) => {
    console.log(props.tipo)

    const tiposColores = (tipo)=>{
        switch (tipo) {
            case 'steel':
                return {backgroundColor: "#e2e2e2"}
                break;
        
            case 'water':
                return {backgroundColor: "#0098e5"}
                break;
        
            case 'bug':
                return {backgroundColor: "#30e52d"}
                break;
        
            case 'dragon':
                return {backgroundColor: "#5213db"}
                break;
        
            case 'fire':
                return {backgroundColor: "#f25810"}
                break;
        
            case 'fairy':
                return {backgroundColor: "#fda5ff"}
                break;
        
            case 'ghost':
                return {backgroundColor: "#7b07ba"}
                break;
        
            case 'ground':
                return {backgroundColor: "#c98f1c"}
                break;
        
            case 'normal':
                return {backgroundColor: "#a5a5a5"}
                break;
        
            case 'psychic':
                return {backgroundColor: "#ea00a4"}
                break;
        
            case 'dark':
                return {backgroundColor: "#38303d"}
                break;
        
            case 'electric':
                return {backgroundColor: "#ffcd07"}
                break;
        
            case 'poison':
                return {backgroundColor: "#68017c"}
                break;
        
            case 'flying':
                return {backgroundColor: "#9ac6f4"}
                break;
        
            case 'ice':
                return {backgroundColor: "#96eaff"}
                break;
        
            case 'rock':
                return {backgroundColor: "#a05b1b"}
                break;
        
            case 'fighting':
                return {backgroundColor: "#f4792c"}
                break;
        
            case 'grass':
                return {backgroundColor: "#009b1c"}
                break;
        
            default:
                break;
        }
    }
    
    
  return (
    <>
    <div id="tipos" style={tiposColores(props.tipo)} className="rounded-2 text-center text-white p-2 d-inline me-2 mb-2">{props.tipo}</div>
    </>
  )
}

export default Tipos