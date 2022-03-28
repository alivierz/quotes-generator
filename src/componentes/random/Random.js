import './random.css'
/*
name es el arreglo
num la posicion
col es el color
*/
const Ran = ({name, num, col}) => {
    return(
        <div className={`quotes ${col}`}>
            <p>{name.quotes[num].quote}</p>
            <h2>{name.quotes[num].author}</h2>
        </div>
    )
}
export default Ran;