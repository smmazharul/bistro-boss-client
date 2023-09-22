import { FaShoppingCart, FaWallet,FaCalendarAlt, FaHome,FaShoppingBag,FaUsers} from "react-icons/fa";
import { BiMenu ,BiRestaurant,BiFoodMenu} from "react-icons/bi";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../hooks/useCart";
import { useQuery } from "@tanstack/react-query";
import useAdmin from "../hooks/useAdmin";

const Dashboard = () => {
    const [cart]=useCart()

    //TODO: load data from the server to have dynamic isAdmin based on data
    const {data:users=[],refetch}=useQuery(['users'],async()=>{
      const res =await fetch('https://bistro-boss-server-02nl.onrender.comusers')
      return res.json();
  })
    // const isAdmin=true;
    const [isAdmin]=useAdmin();
  return (
    <div className="drawer drawer-mobile ">
    <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
    <div className="drawer-content flex flex-col items-center justify-center">
        <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
        <Outlet></Outlet>

    </div>
    <div className="drawer-side bg-[#D1A054]">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80">
          {
            isAdmin? <>
            <li>
            <NavLink to='/dashboard/adminhome'><FaHome/>Admin Home</NavLink>
          </li>
          
          <li >
            <NavLink to='/dashboard/managebooking'><BiFoodMenu/>Manage Booking</NavLink>
            
          </li>
          <li >
            <NavLink to='/dashboard/manageitems'><BiMenu/>Manage Items</NavLink>
            
          </li>
          <li>
            <NavLink to='/dashboard/addItem'><BiRestaurant/>Add an items</NavLink>
          </li>

          <li className="flex-row ">
            <NavLink to='/dashboard/allusers'><FaUsers></FaUsers>All Users<span className="badge badge-secondary">+{users?.length||0}</span></NavLink>
            
          </li>



            
            </>:<>




            <li>
            <NavLink to='/dashboard/userhome'><FaHome/>User Home</NavLink>
          </li>
          <li className="flex-row ">
            <NavLink to='/dashboard/mycart'><FaShoppingCart></FaShoppingCart>My Cart<span className="badge badge-secondary">+{cart?.length||0}</span></NavLink>
            
          </li>
          <li >
            <NavLink to='/dashboard/history'><FaWallet/>Payment History</NavLink>
            
          </li>
          <li>
            <NavLink to='/dashboard/reservation'><FaCalendarAlt/>Reservations</NavLink>
          </li>

            </>
          }
          
          <div className="divider"></div>



          <li>
            <NavLink to='/'><FaHome/>Home</NavLink>

          </li>
          <li>
            <NavLink to='/order/salad'><FaShoppingBag/>Order Food</NavLink>

          </li>
          <li>
            <NavLink to='/menu'><BiMenu/>Our Menu</NavLink>

          </li>
         
         
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
