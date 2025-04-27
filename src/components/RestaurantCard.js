import { IMG_URL } from "../utils/constant";

const RestaurantCard = (props)=>{
    // console.log(props);
    const {resData}  = props;
    const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, deliveryTime } = resData?.info || {};

    //  console.log(resData);
  return(
    <div data-testid="resCard" className="m-4 p-4 w-[200px] bg-gray-100 hover:bg-gray-200 flex-wrap rounded-lg">
      <img className="rounded-lg" alt="" src={IMG_URL+cloudinaryImageId}/>
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4>{cuisines?.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo} </h4>
      <h4>{deliveryTime}</h4>
    </div>
  )
  };

  export const withPromotedLabel = (RestaurantCard)=>{
    return (props)=>{
      return(
        <div>
          <label className="absolute bg-green-600 text-white ml-4 p-2 rounded-lg">Pure Veg</label>
          <RestaurantCard {...props}/>
          </div>
      )
    }
  }
  export default RestaurantCard;