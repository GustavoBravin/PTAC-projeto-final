export default function Cards({listaV}){
   
    return(
        
     listaV.map((video) =>
     
     <div className="card">
     <iframe 
     src={"https://www.youtube.com/embed/" + video.url.slice(17)} 
     frameborder="0"
     >
        
     </iframe>

    </div>
    
    )
    )
}