import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useMenu from "../../../hooks/useMenu";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const PopularMenu = () => {
    const [menu]=useMenu();
    const popular=menu.filter(item=>item.category=='popular');
    // const [menu,setMenu]=useState([])
    // console.log(menu)
    // useEffect(()=>{
    //     fetch('menu.json')
    //     .then(res=>res.json())
    //     .then(data=>{
    //         const popolaritems=data.filter(item=>item.category==="popular");
    //         console.log(popolaritems)
    //         setMenu(popolaritems)
    //     })
    // },[])


    return (
        <section className="mb-12">
            <SectionTitle 
            subHeading={"--From Our Menu--"}
            heading={"Popular Menu"}
            >
            </SectionTitle>

            <div className="grid md:grid-cols-2 gap-10">
                {
               popular.map(item=><MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
            <button className="btn btn-outline border-0 border-b-4 mt-4 ">View Full Menu </button>
        </section>
    );
};

export default PopularMenu;