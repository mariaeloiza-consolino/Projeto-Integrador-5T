import {useState} from 'react'

function Contador(){
    const[contador, setContador] = useState (0);
}

function incrementar () {
        setContador (contador + 1);
    }

function decrementar () {
        setContador (contador - 1);
    }    
 
export default Contador
