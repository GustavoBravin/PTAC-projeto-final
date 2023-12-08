import { useParams } from "react-router-dom"
import Card from '../Componentes/Card'

export default function Detalhe(){
   
    const {id} = useParams();

    const lista = JSON.parse(localStorage.getItem("Lista"))
    const nome = lista.map((video) => {
        if(video.id == id){
  return(
    
    <div className="card">

    <h1>{video.nome}</h1>
    <iframe 
    src={"https://www.youtube.com/embed/" + video.url.slice(17)} 
    frameborder="0"
    >
       
    </iframe>

   </div>
   
   

  )
        }
    return null;
    })
    return nome

}