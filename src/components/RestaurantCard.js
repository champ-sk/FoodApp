import { IMG_URL } from "../utils/constant";

const RestaurantCard = (props)=>{
    // console.log(props);
    const {resData}  = props;
    const {cloudinaryImageId,name,cuisines,avgRating,costForTwo,deliveryTime} = resData.info;
    //  console.log(resData);
  return(
    <div className="m-4 p-4 w-[200px] bg-gray-100 hover:bg-gray-200 flex-wrap rounded-lg">
      <img className="rounded-lg" alt="" src={IMG_URL+cloudinaryImageId}/>
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo} </h4>
      <h4>{deliveryTime}</h4>
    </div>
  )
  }
  export default RestaurantCard;