import { useParams } from "react-router-dom"
import Card from '../componentes/Card'

export default function Detalhe(){

    const {id} = useParams();
    const lista = JSON.parse(localStorage.getItem("Lista"))
    const bola = lista.filter((objeto) => {
        if(objeto.id == id){
  return objeto;
        }
    return null;
    })
console.log(bola)

return(
<div>
 <Card  cadastrar={bola[0]}/>
</div>

)


}