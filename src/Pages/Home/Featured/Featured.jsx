import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featheredImg from "../../../assets/home/featured.jpg";
import "./Featured.css";
const Featured = () => {
  return (
    <div className="feathered-item text-white pt-8 ">
      <SectionTitle
        subHeading={"check it out"}
        heading={"Feathered items"}
      ></SectionTitle>
      <div className="md:flex justify-center items-center pb-20 pt-12 px-36 bg-slate-500 bg-opacity-50">
        <div>
          <img src={featheredImg} alt="" />
        </div>
        <div className="md:ml-10">
          <p>Aug 20, 2022</p>
          <p className="uppercase">Where can i get some?</p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste,
            accusantium expedita. Adipisci quae repellendus numquam beatae!
            Minima alias quaerat nulla aliquid molestiae nisi provident iste,
            laboriosam veniam commodi rerum officiis excepturi, voluptatibus
            cumque asperiores doloremque ratione pariatur obcaecati odit error,
            laudantium delectus modi facere recusandae! Placeat voluptatem dolor
            tenetur? Qui!
          </p>
          <button className="btn btn-outline border-0 border-b-4 mt-4">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
