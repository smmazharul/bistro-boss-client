import { useQuery } from "@tanstack/react-query";
// import { useEffect } from "react";
// import { useState } from "react";


const useMenu =()=>{
    // const [menu,setMenu]=useState([]);
    // const [loading,setLoading]=useState(true);
    // useEffect(()=>{
    //     fetch('https://bistro-boss-server-02nl.onrender.com/menu')
    //     .then(res=>res.json())
    //     .then(data=>{
    //         setMenu(data)
    //         setLoading(false);
    //     })
    // },[])

    const {refetch,data:menu=[],isLoading:loading}=useQuery({
        queryKey:['menu'],
        queryFn:async()=>{
            const res=await fetch('https://bistro-boss-server-02nl.onrender.com/menu');
            return res.json()
        }
    })
    return [menu,loading,refetch]
}
export default useMenu;