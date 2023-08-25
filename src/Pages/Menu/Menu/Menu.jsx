import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import menuImg from "../../../assets/menu/banner3.jpg";
import dessertImg from "../../../assets/menu/dessert-bg.jpeg";
import pizzatImg from "../../../assets/menu/pizza-bg.jpg";
import saladtImg from "../../../assets/menu/salad-bg.jpg";
import souptImg from "../../../assets/menu/soup-bg.jpg";
import useMenu from "../../../hooks/useMenu";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";

const Menu = () => {
  const [menu] = useMenu();
  const desserts = menu.filter((item) => item.category == "dessert");
  const pizza = menu.filter((item) => item.category == "pizza");
  const soup = menu.filter((item) => item.category == "soup");
  const salad = menu.filter((item) => item.category == "salad");
  const offered = menu.filter((item) => item.category == "offered");

  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      <Cover img={menuImg} title={"Our Menu"}></Cover>
      {/* main cover  */}
      <SectionTitle
        subHeading={"Don't Miss"}
        heading={"Today's Offered"}
      ></SectionTitle>
      {/* offered menu items */}
      <MenuCategory items={offered}></MenuCategory>
      {/* dessert menu items */}
      <MenuCategory
        items={desserts}
        title={"dessert"}
        coverImg={dessertImg}
      ></MenuCategory>
      {/* pizza menu items */}
      <MenuCategory
        items={pizza}
        title={"pizza"}
        coverImg={pizzatImg}
      ></MenuCategory>
      <MenuCategory
        items={salad}
        title={"salad"}
        coverImg={saladtImg}
      ></MenuCategory>
      <MenuCategory
        items={soup}
        title={"soup"}
        coverImg={souptImg}
      ></MenuCategory>
    </div>
  );
};

export default Menu;
