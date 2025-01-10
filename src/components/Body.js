import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { useEffect, useState } from "react";

const Body = () => {
  const [listOfRes, setListOfRes] = useState([]);
  const [filterListRes, setFilterListRes] = useState([]);
  const [searchText, setSearchText] = useState("");

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
        json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
      );
      setFilterListRes(
        json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
      );
      //console.log(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
    } catch (error) {
      // Handle network or other unexpected errors
      console.error("Fetch Error:", error);
    }
  };

  return listOfRes.length ===0 ?(<Shimmer/>): (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
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
        <button
          className="btn"
          onClick={() => {
            const filteredRes = listOfRes.filter(
              (res) => res.info.avgRating > 4.3
            );
            console.log(filteredRes);
            setListOfRes(filteredRes);
          }}
        >
          Fiter the restaurants
        </button>
      </div>
      <div className="res">
        <div className="res-container">
          {filterListRes.map((restaurant) => (
            <RestaurantCard key={restaurant.info.id} resData={restaurant} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Body;
