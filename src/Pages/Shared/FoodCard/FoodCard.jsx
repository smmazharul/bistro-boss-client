import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import { stringify } from "postcss";
import useCart from "../../../hooks/useCart";

const FoodCard = ({item}) => {
 const {name,image,price,recipe,_id}=item  || {};
  // console.log(item)
  const {user}=useContext(AuthContext);
  const navigate=useNavigate()
  const location=useLocation()
  const [,refetch]=useCart()


  const handleAddToCart=item=>{
    console.log(item)
    if(user && user.email){
      const cartItem={menuItemId:item._id,name,image, price,email:user.email}
      fetch('https://bistro-boss-server-02nl.onrender.com/carts',{
        method:'POST',
        headers:{
          'content-type':'application/json'
        },
        body:JSON.stringify(cartItem)
      })
      .then(res=>res.json())
      .then(data=>{
        console.log(data)
        // console.log(data.indertedId)
        if(data.insertedId){
          refetch(); //refetch cart to update the number of items in the cart
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Item added Cart successfully',
            showConfirmButton: false,
            timer: 1500
          })
        }
      
      })
      
    }
    else{
      Swal.fire({
        title: 'Please login to order the food',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Login'
      }).then((result) => {
        if (result.isConfirmed) {
         navigate('/login',{state:{from:location}})
        }
      })
    }
  }
  return (
    <>
      
      {item?.name && (
        <div className="card w-80 bg-base-100 shadow-xl ">
          <figure>
            <img src={image} alt={name} />
          </figure>
          <p className=" text-white bg-black p-2 rounded-lg font-bold absolute right-0">${item?.price}</p>
          <div className="card-body">
            <h2 className="text-center font-extrabold text-xl">{name}</h2>
            <p>{recipe}</p>
            <div className="card-actions justify-center">
              {
                <button onClick={()=>handleAddToCart(item)} className="btn btn-outline bg-slate-300 hover:bg-orange-500 border-0 border-b-4 mt-4 ">
                  Add to cart
                </button>
              }
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FoodCard;
