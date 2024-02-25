import { useEffect, useState } from "react";

export function useFetch(url){
    const [data, setdata] = useState(null);
    const [louding, setLouding] = useState(false);
    const [errors, setErrors] = useState(null)
useEffect(() => {
    const fetchData = async () => {
     setLouding(true);
    try{
            const req = await fetch(url);
            if(req.ok == false){
               throw new Error(req.statusText);
            } 
            const data = await req.json();
            setdata(data)
            setLouding(false);
    }
    catch(err){
        console.log(err.message);
        setErrors(err.message);
        setLouding(false);
    }
 
    }
    fetchData();
},[url])

    return{ data,louding,errors }
}