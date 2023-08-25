const FoodCard = ({ item }) => {
  return (
    <>
      
      {item?.name && (
        <div className="card w-80 bg-base-100 shadow-xl ">
          <figure>
            <img src={item?.image} alt={item?.name} />
          </figure>
          <p className=" text-white bg-black p-2 rounded-lg font-bold absolute right-0">${item?.price}</p>
          <div className="card-body">
            <h2 className="text-center font-extrabold text-xl">{item?.name}</h2>
            <p>{item?.recipe}</p>
            <div className="card-actions justify-center">
              {
                <button className="btn btn-outline bg-slate-300 hover:bg-orange-500 border-0 border-b-4 mt-4 ">
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
