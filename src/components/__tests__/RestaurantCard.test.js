import RestaurantCard from "../RestaurantCard";
import {render , screen} from "@testing-library/react";
import Mock_data from "../MockData/resCardMockData.json";
import "@testing-library/jest-dom"
//console.log(Mock_data);
it("Should render the restaurant card with props pasing inside it", ()=>{
    const { container } = render(<RestaurantCard resData={Mock_data} />);
  console.log(container.innerHTML);  // Log the entire rendered HTML

})