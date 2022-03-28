import './button.css'
/*
func es la funcion a ejecutar con el evento onclick
col es el color que cambiamos en la clase con los ``
*/
const Button = ({func, col}) =>{
    return(
        <a className={`button ${col}`} onClick={func}> New Quote </a>
    )
}
export default Button;