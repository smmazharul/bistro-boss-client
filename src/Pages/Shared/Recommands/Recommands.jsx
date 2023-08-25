const Recommands = ({ item }) => {
  const { name, recipe, image } = item;
  return (
    <>
      <div className="card  bg-base-100 shadow-xl ">
  <figure><img  src={image} alt={name}/></figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>{recipe}</p>
    <div className="card-actions justify-center">
    <button className="btn border-2 border-gray-600 hover:btn-warning px-16 uppercase">Add to cart</button>

    </div>
  </div>
</div>
    </>
  );
};

export default Recommands;
