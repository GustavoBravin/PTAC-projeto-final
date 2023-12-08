import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Cards from '../Componentes/Card'


export default function Home(){
    
   
    const lista = JSON.parse(localStorage.getItem("Lista"))  
      
   
    return(

        <div>
        <h1>PTAC 2 - PROJETO FINAL</h1>
        <Cards listaV={lista} />
        <Link to="/cadastrar">Cadastrar</Link>
        </div>
        
        );
}