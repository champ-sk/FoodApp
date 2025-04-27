import RestaurantCard, {withPromotedLabel} from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [listOfRes, setListOfRes] = useState([]);
  const [filterListRes, setFilterListRes] = useState([]);
  const [searchText, setSearchText] = useState("");
 // console.log(listOfRes);
  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );

      if (!response.ok) {
        // If the response status is not 2xx, handle it
        const errorText = await response.text();
        console.error("Server Error:", errorText);
        return;
      }

      // Parse JSON if the response is okay
      const json = await response.json();
      setListOfRes(
        json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
      );
      setFilterListRes(
        json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
      );
     // console.log(json.data);
    } catch (error) {
      // Handle network or other unexpected errors
      console.error("Fetch Error:", error);
    }
  };

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false)
    return (
      <h1>Oops ! you are currently offline.. Please check your network</h1>
    );
  return listOfRes.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex">
        <div className="search m-4 p-4">
          <input
          data-testid="inputSearch"
            type="text"
            className="search-box border border-black border-solid"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="px-4 py-2 m-4 bg-green-100 border-spacing-8 rounded-lg"
            onClick={() => {
              const filteredRes = listOfRes.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilterListRes(filteredRes);
            }}
          >
            Search
          </button>
        </div>
        <div className="search m-4 p-4 flex items-center">
          <button
            className="m-4 p-2 bg-gray-100 rounded-lg"
            onClick={() => {
              const filteredRes = listOfRes.filter(
                (res) => res.info.avgRating > 4.3
              );
             // console.log(filteredRes);
              setListOfRes(filteredRes);
            }}
          >
            Fiter the restaurants
          </button>
        </div>
      </div>
      <div className="flex flex-wrap">
        <div className="flex flex-wrap">
          {filterListRes.map((restaurant) => (
            <Link
              key={restaurant.info.id}
              to={"/restaurants/" + restaurant.info.id}
            >
              {restaurant.info.veg?(<RestaurantCardPromoted resData={restaurant}/>):(<RestaurantCard resData={restaurant} />)}
              
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Body;
