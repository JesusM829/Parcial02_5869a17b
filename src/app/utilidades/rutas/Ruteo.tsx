import {Route , Routes} from "react-router-dom";
import { Inicio } from "../../componentes/contenedor/Inicio";
import { ArtistaAdmin } from "../../componentes/artista/ArtistaAdmin";
import { ArtistaListar } from "../../componentes/artista/ArtistaListar";
import { ArtistaRegistrar } from "../../componentes/artista/ArtistaRegistrar";
import { Acerca } from "../../componentes/otros/Acerca";
import { NoEncontrado } from "../../componentes/contenedor/NoEncontrado";



export const Ruteo = ()=>{
    return(
       <Routes>
        <Route path="/" element={<Inicio />}/>

        <Route path="/AdmiA" element={<ArtistaAdmin />}/>
        <Route path="/listA" element={<ArtistaListar />}/>
        <Route path="/RegisA" element={<ArtistaRegistrar />}/>
        
        <Route path="/acercaA" element={<Acerca/>}/>

        <Route path="*" element={<NoEncontrado/>}/>
       </Routes>
    )
}