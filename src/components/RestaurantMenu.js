import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  
  const { resId } = useParams();
  const menuData = useRestaurantMenu(resId);

  if (menuData === null) return <Shimmer />;
  const { name, cuisines, costForTwoMessage } =
    menuData?.cards[2]?.card?.card?.info;
  const { itemCards } =
    menuData?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card;
  console.log(menuData);
  console.log(itemCards);
  
  return (
    <div className="Menu">
      <h1>{name}</h1>
      <p>
        {cuisines.join(",")} - {costForTwoMessage}
      </p>
      <ul>
        {itemCards.map((item) => (
          <li>
            {item?.card?.info?.name}- Rs{" "}
            {item?.card?.info?.defaultPrice / 100 ||
              item?.card?.info?.price / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default RestaurantMenu;
