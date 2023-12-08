export default function Destaque(){

    const lista = JSON.parse(localStorage.getItem("Lista"))
    const destaque = lista.slice(-2)
    console.log(destaque)

    return(
        
        destaque.map((video) =>  
        
           
        <div className="card">
   
        <h1>{video.nome}</h1>
   
        <iframe 
        src={"https://www.youtube.com/embed/" + video.url.slice(17)} 
        frameborder="0"
        >
           
        </iframe>
   
       </div>
       
       )
       )










}