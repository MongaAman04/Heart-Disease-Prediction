import { useLocation, useEffect, useState } from "react"
import "../style.css"
import { useParams } from "react-router-dom"
export const Result = ({ prediction,data })=>{
    console.log(prediction);
    console.log(data);
    if (prediction == "0") {
        return(
        <div className="background h-[87vh] flex justify-center items-center text-white font-bold text-3xl relative">
            <img className="absolute z-0 opacity-40 scale-125" src="src\images\realistic-heart-shape-studio 1.png" alt="" />
           <h1 className="z-10 absolute">Hurrah,Your heart is totally fine, Take care of Heart like that.</h1>
        </div>
    )
    }
   else{
     return(
        <div className="background h-[87vh] flex justify-center items-center text-white font-bold text-3xl relative">
            <img className="absolute z-0 opacity-40 scale-125" src="src\images\realistic-heart-shape-studio 1.png" alt="" />
           <h1 className="z-10 absolute">OOP's,Your heart is not fine, Consult a doctor.</h1>
        </div>
    )
   }
    
}