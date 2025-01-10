import { IMG_URL } from "../utils/constant";

const RestaurantCard = (props)=>{
    // console.log(props);
    const {resData}  = props;
    const {cloudinaryImageId,name,cuisines,avgRating,costForTwo,deliveryTime} = resData.info;
    //  console.log(resData);
  return(
    <div className="res-card">
      <img className="img" alt="" src={IMG_URL+cloudinaryImageId}/>
      <h3>{name}</h3>
      <h4>{cuisines}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo} </h4>
      <h4>{deliveryTime}</h4>
    </div>
  )
  }
  export default RestaurantCard;