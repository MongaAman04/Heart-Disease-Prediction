import { useLocation, useEffect, useState } from "react"
import "../style.css"
export const Result = (data)=>{
//    const location = useLocation();
//    const prediction = location.state?.prediction
    // useEffect(() => {
    //     // Using fetch to fetch the api from 
    //     // flask server it will be redirected to proxy
    //     fetch("/submit").then((res) =>
    //         res.json().then((data) => {
    //             // Setting a data from api
    //            setPridiction(data)
    //         })
    //     );
    // }, []);
    // console.log(prediction);
    // let newdata = !data
    // console.log(fbs,thal);
    // console.log(data,fbs,thal);
    
    if (data == "0") {
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
           <h1 className="z-10 absolute">OOP's,Your heart is not fine, Consult a doctor immediately.</h1>
        </div>
    )
   }
    
}