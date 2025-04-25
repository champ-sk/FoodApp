import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const [showIndex , setShowIndex] = useState(0);
  const { resId } = useParams();
  const menuData = useRestaurantMenu(resId);

  if (menuData === null) return <Shimmer />;
  const { name, cuisines, costForTwoMessage } =
    menuData?.cards[2]?.card?.card?.info;
  const { itemCards } =
    menuData?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card;
  console.log(menuData?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
  const categories = menuData?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c=>c?.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
  console.log(categories);
  
  return (
    <div className="text-center">
      <h1 className="font-bold my-10 text-2xl">{name}</h1>
      <p className="font-bold text-lg">
        {cuisines.join(",")} - {costForTwoMessage}
      </p>
      {
        categories.map((category,index)=>(
<RestaurantCategory data={category.card.card} showItems={index===showIndex ? true: false} setShowIndex = {()=>setShowIndex(index)}/>
        ))
      }
    </div>
  );
};
export default RestaurantMenu;
