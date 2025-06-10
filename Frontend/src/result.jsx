import { useEffect, useState } from "react"

export const Result = ()=>{
   
    useEffect(() => {
        // Using fetch to fetch the api from 
        // flask server it will be redirected to proxy
        fetch("/submit").then((res) =>
            res.json().then((data) => {
                // Setting a data from api
               setPridiction(data)
            })
        );
    }, []);
    // console.log(prediction);
    
    return(
        <div>
            <h1>{prediction}</h1>
        </div>
    )
}