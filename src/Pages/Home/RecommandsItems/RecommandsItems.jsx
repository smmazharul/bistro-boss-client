import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import Recommands from "../../Shared/Recommands/Recommands";

const RecommandsItems = () => {
    const [items,setItems]=useState([])
    useEffect(()=>{
        fetch("menu.json")
        .then(res=>res.json())
        .then(data=>setItems(data))
    },[])
    return (
        <div className="max-w-screen-xl mx-auto my-24">
            <SectionTitle
            subHeading={"---Should Try---"}
            heading={"Chef Recommends"}
            >

            </SectionTitle>

            <div className="grid md:grid-cols-3 md:space-x-4 ">
                {
                    items.slice(1,4).map(item=><Recommands key={item._id} item={item}></Recommands>)
                }
            </div>


        </div>
    );
};

export default RecommandsItems;