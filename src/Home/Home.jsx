import { useParams } from "react-router-dom"
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Cards from '../componentes/Card'


export default function Home(){
    
   
    const lista = JSON.parse(localStorage.getItem("Lista"))  
       console.log(lista)
   
    return(

        <div>
        <h1>PTAC 2 - PROJETO FINAL</h1>
        <Cards listaV={lista} />
        <Link to="/cadastrar">Cadastrar</Link>
        </div>
        
        );
}