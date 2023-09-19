import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";


const img_host_token = import.meta.env.VITE_Image_Upload_Token;
const AddItem = () => {
  const [axiosSecure]=useAxiosSecure()
  const { register, handleSubmit } = useForm();
  const img_hosting_Url = `https://api.imgbb.com/1/upload?key=${img_host_token} `;

  
  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("image", data.image[0]);
    fetch(img_hosting_Url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imageResponse) => {
        if (imageResponse.success) {
          const imageUrl = imageResponse.data.display_url;
          const { name, price, category, recipe } = data;
          const newItem = {
            name,
            price: parseFloat(price),
            category,
            recipe,
            image: imageUrl,
          };
          console.log(newItem);
          axiosSecure.post("/menu", newItem).then((data) => {
            console.log("after posting new item", data.data);
            if(data.data.insertedId){
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'New Item Added Successfully',
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
          });
        }
      });
  };

  return (
    <div className="w-full px-10">
      <Helmet>
        <title>Bistro Boss | Add an Item</title>
      </Helmet>
      <SectionTitle
        subHeading={"what's new"}
        heading={"Add an item"}
      ></SectionTitle>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text font-semibold">Recipe name*</span>
          </label>
          <input
            type="Recipe Name"
            placeholder="Type here"
            {...register("name", { required: true, maxLength: 120 })}
            className="input input-bordered w-full "
          />
        </div>

        <div className="flex gap-10 mt-4">
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text font-semibold">Category*</span>
            </label>
            <select
              className="select select-bordered"
              {...register("category", { required: true })}
            >
              <option disabled selected>
                Category
              </option>
              <option>pizza</option>
              <option>soup</option>
              <option>salad</option>
              <option>dessert</option>
              <option>drinks</option>
            </select>
          </div>

          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text font-semibold">Price*</span>
            </label>
            <input
              type="number"
              placeholder="price"
              {...register("price", { required: true })}
              className="input input-bordered w-full "
            />
          </div>
        </div>

        <div className="form-control w-full mt-4">
          <label className="label">
            <span className="label-text font-semibold">Recipe Details*</span>
          </label>
          <textarea
            className="textarea textarea-bordered h-24"
            placeholder="Write  Details about Item "
            {...register("recipe", { required: true })}
          ></textarea>
        </div>

        <div className="form-control w-full mt-4  ">
          <label className="label">
            <span className="label-text font-semibold">Item Image*</span>
          </label>
          <input
            type="file"
            {...register("image", { required: true })}
            className="file-input file-input-bordered w-full "
          />
        </div>

        <input className="btn btn-sm mt-4" type="submit" value="Add Item" />
      </form>
    </div>
  );
};

export default AddItem;
